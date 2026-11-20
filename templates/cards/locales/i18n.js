(() => {
  const supportedLocales = ['en-US', 'pt-BR'];
  const localeLabels = {
    'en-US': 'English',
    'pt-BR': 'Português (Brasil)',
  };
  const storageKey = 'it-crowd-locale';

  function matchLocale(value) {
    const normalized = String(value || '').toLowerCase();
    return supportedLocales.find((locale) => locale.toLowerCase() === normalized)
      || supportedLocales.find((locale) => locale.split('-')[0].toLowerCase() === normalized.split('-')[0])
      || null;
  }

  function readStoredLocale() {
    try {
      return matchLocale(window.localStorage.getItem(storageKey));
    } catch (error) {
      return null;
    }
  }

  function detectBrowserLocale() {
    const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language];
    return browserLocales.map(matchLocale).find(Boolean) || 'en-US';
  }

  function setLocale(locale) {
    const nextLocale = matchLocale(locale) || 'en-US';
    try {
      window.localStorage.setItem(storageKey, nextLocale);
    } catch (error) {
      // Private browsing or blocked storage should not prevent the page from working.
    }
    window.ITCrowdLocale = nextLocale;
    document.documentElement.lang = nextLocale;
    return nextLocale;
  }

  function updateLocaleAssets() {
    const locale = window.ITCrowdLocale || 'en-US';
    document.querySelectorAll('img[src]').forEach((image) => {
      const source = image.getAttribute('src');
      if (!source || !source.includes('exported-images/cards/')) return;

      image.setAttribute(
        'src',
        source.replace(
          /exported-images\/cards\/(?:en-US\/|pt-BR\/)?/,
          `exported-images/cards/${locale}/`
        )
      );
    });
  }

  function applyManualLocale() {
    const localeData = window.ITCrowdManualLocales?.[window.ITCrowdLocale] || {};
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(localeData, key)) element.innerHTML = localeData[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (Object.prototype.hasOwnProperty.call(localeData, key)) element.alt = localeData[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const key = element.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(localeData, key)) element.setAttribute('aria-label', localeData[key]);
    });
  }

  function createLocaleSelector() {
    if (document.querySelector('[data-locale-switcher]')) return;

    const wrapper = document.createElement('label');
    wrapper.className = 'locale-switcher';
    wrapper.dataset.localeSwitcher = '';
    wrapper.setAttribute('aria-label', 'Idioma / Language');

    const text = document.createElement('span');
    text.textContent = 'Language / Idioma';

    const select = document.createElement('select');
    select.setAttribute('aria-label', 'Selecionar idioma / Select language');
    supportedLocales.forEach((locale) => {
      const option = document.createElement('option');
      option.value = locale;
      option.textContent = localeLabels[locale];
      select.append(option);
    });
    select.value = window.ITCrowdLocale;
    select.addEventListener('change', () => {
      setLocale(select.value);
      window.location.reload();
    });

    wrapper.append(text, select);
    const playtestActions = document.querySelector('.playtest-header-actions');
    const exportPanel = document.querySelector('[data-export-panel]');
    const manualHost = document.querySelector('[data-locale-switcher-host]');
    const target = manualHost || playtestActions || exportPanel || document.body;
    target.prepend(wrapper);
    applyManualLocale();
    updateLocaleAssets();
  }

  setLocale(readStoredLocale() || detectBrowserLocale());
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createLocaleSelector, { once: true });
  } else {
    createLocaleSelector();
  }
})();
