(() => {
  const { CARD_CREDITS, CARD_TYPES } = window.ITCrowdCardData;

      function exportedImagePath(code) {
        const root = window.ITCrowdExportedImageRoot || '../../exported-images/cards';
        const mode = window.ITCrowdExportedImageMode || 'full';
        const resolution = window.ITCrowdExportedImageResolution || 'low';
        return `${root}/${mode}/${resolution}/${String(code).toLowerCase()}.png`;
      }

      function attachExportedImage(article, code) {
        if (!window.ITCrowdUseExportedImages) return;

        const image = document.createElement('img');
        image.className = 'card-raster-image';
        image.dataset.exportedImageCode = code;
        image.alt = '';
        image.addEventListener('load', () => {
          if (window.ITCrowdUseExportedImages) article.classList.add('card--rasterized');
        });
        image.addEventListener('error', () => {
          article.classList.remove('card--rasterized');
        });
        image.src = exportedImagePath(code);
        article.prepend(image);
      }

      function setExportedImageMode(mode) {
        window.ITCrowdExportedImageMode = mode;
        refreshExportedImages();
      }

      function setExportedImageResolution(resolution) {
        window.ITCrowdExportedImageResolution = resolution;
        refreshExportedImages();
      }

      function setExportedImageUsage(useExportedImages) {
        window.ITCrowdUseExportedImages = useExportedImages;
        document.querySelectorAll('[data-exported-image-code]').forEach((image) => {
          const article = image.closest('[data-card-code]');
          if (article && !useExportedImages) article.classList.remove('card--rasterized');
        });
      }

      function refreshExportedImages() {
        document.querySelectorAll('[data-exported-image-code]').forEach((image) => {
          const article = image.closest('[data-card-code]');
          if (!article) return;
          article.classList.remove('card--rasterized');
          image.src = exportedImagePath(image.dataset.exportedImageCode);
        });
      }

      function createRuleRow(rule) {
        const row = document.createElement('div');
        row.className = 'rule-slot';
        if (rule.dense) row.classList.add('rule-slot--dense');
        const contentLines = String(rule.line || '').split('\n').length;
        const effectLines = rule.effect ? String(rule.effect).split('\n').length : 0;
        const minimumLines = Math.max(1, contentLines + effectLines);
        row.style.setProperty('--rule-lines', String(Math.max(minimumLines, rule.nr_lines || 1)));

        const label = document.createElement('strong');
        label.className = 'rule-slot__label';
        label.textContent = rule.label;
        if (Array.from(String(rule.label || '').trim()).length < 3) {
          label.classList.add('rule-slot__label--short');
        }

        const content = document.createElement('div');
        content.className = 'rule-slot__content';
        content.textContent = rule.line;

        const effect = document.createElement('div');
        effect.className = 'rule-slot__effect';
        effect.textContent = rule.effect || '';

        row.append(label, content, effect);
        return row;
      }

      function createCard(code, card) {
        const cardType = card.type || CARD_TYPES.CALL;
        const artist = card.artist || CARD_CREDITS.artist;
        const creditDate = card.date || CARD_CREDITS.date;
        const article = document.createElement('article');
        article.className = `card card--background card--type-${cardType.id}${cardType.small ? ' card--small' : ''}`;
        article.dataset.cardCode = code;
        if (card.quote) article.classList.add('card--has-quote');
        article.dataset.cardType = cardType.id;
        article.style.setProperty('--card-background', cardType.backgroundPath
          ? `url('${cardType.backgroundPath}')`
          : 'none');
        article.style.setProperty('--border-color', cardType.accentColor);
        article.style.setProperty('--frame-color', cardType.frameColor);
        article.style.setProperty('--header-color', cardType.headerColor || '#fff7db');
        article.setAttribute('aria-label', `Carta de ${cardType.label}: ${card.title}`);

        const header = document.createElement('header');
        header.className = 'card-header';

        if (cardType.headerPath) {
          const headerArt = document.createElement('img');
          headerArt.className = 'card-header__art';
          headerArt.src = cardType.headerPath;
          headerArt.alt = cardType.label;
          header.append(headerArt);
        } else {
          if (cardType.headerIconPath) {
            const headerIcon = document.createElement('img');
            headerIcon.className = 'card-header__icon-art';
            headerIcon.src = cardType.headerIconPath;
            headerIcon.alt = '';
            header.append(headerIcon);
          }

          const headerText = document.createElement('span');
          headerText.className = 'card-header__text';
          headerText.textContent = [cardType.icon, cardType.label].filter(Boolean).join(' ');
          header.append(headerText);
        }

        const main = document.createElement('section');
        main.className = 'card-main';

        const titleSlot = document.createElement('div');
        titleSlot.className = 'title-slot';
        if (card.titleArt) {
          const titleArt = document.createElement('img');
          titleArt.className = 'title-slot__art';
          titleArt.src = `${cardType.artRoot}${card.titleArt}`;
          titleArt.alt = card.title;
          titleSlot.append(titleArt);
        } else {
          const title = document.createElement('h1');
          title.className = 'card-title';
          title.textContent = card.title;
          titleSlot.append(title);

          if (card.subtitle) {
            const subtitle = document.createElement('h2');
            subtitle.className = 'card-subtitle';
            subtitle.textContent = card.subtitle;
            titleSlot.append(subtitle);
          }
        }

        const quote = card.quote ? document.createElement('p') : null;
        if (quote) {
          quote.className = 'card-quote';
          quote.textContent = `“${card.quote}”`;
        }

        const artSlot = document.createElement('div');
        artSlot.className = 'art-slot';
        if (card.initiativeImage) {
          const characterArt = document.createElement('img');
          characterArt.className = 'card-initiative__character-art';
          characterArt.src = card.initiativeImage;
          characterArt.alt = '';
          artSlot.append(characterArt);
        }
        if (cardType.artRoot) {
          const illustration = document.createElement('img');
          illustration.src = `${cardType.artRoot}${code.toLowerCase()}.png`;
          illustration.alt = '';
          illustration.addEventListener('error', () => illustration.remove());
          artSlot.append(illustration);
        }

        const rules = document.createElement('section');
        rules.className = 'rules';
        const ruleRows = card.rules || card.resolve || [];
        rules.classList.add(`rules--${ruleRows.length}`);
        ruleRows.forEach(rule => rules.append(createRuleRow(rule)));

        const footer = document.createElement('footer');
        footer.className = 'card-footer';
        footer.setAttribute('aria-label', `Créditos: ${code}, ${artist}, ${creditDate}`);

        const footerCode = document.createElement('span');
        footerCode.className = 'card-footer__code';
        footerCode.textContent = code;

        const footerArtist = document.createElement('span');
        footerArtist.className = 'card-footer__artist';
        footerArtist.textContent = "✏️ "+artist;

        const footerDate = document.createElement('span');
        footerDate.className = 'card-footer__date';
        footerDate.textContent = creditDate;

        footer.append(footerCode, footerArtist, footerDate);
        main.append(titleSlot, ...(quote ? [quote] : []), artSlot, rules);
        article.append(header, main, footer);
        attachExportedImage(article, code);
        return article;
      }

      function createCardBack(code, card) {
        const cardType = card.type || CARD_TYPES.CALL;
        const article = document.createElement('article');
        article.className = `card card--background card-back card--type-${cardType.id}${cardType.small ? ' card--small' : ''}`;
        article.style.setProperty('--card-background', cardType.backgroundPath
          ? `url('${cardType.backgroundPath}')`
          : 'none');
        article.style.setProperty('--border-color', cardType.accentColor);
        article.style.setProperty('--frame-color', cardType.frameColor);
        article.setAttribute('aria-label', `Verso do baralho: ${cardType.label}`);

        if (cardType.headerPath) {
          const headerArt = document.createElement('img');
          headerArt.className = 'card-back__art';
          headerArt.src = cardType.headerPath;
          headerArt.alt = cardType.label;
          article.append(headerArt);
        } else {
          const label = document.createElement('strong');
          label.className = 'card-back__label';
          label.textContent = [cardType.icon, cardType.label].filter(Boolean).join(' ');
          article.append(label);
        }

        article.dataset.cardCode = code;
        return article;
      }

      function createPlayerCharacterCard(code, card) {
        const cardType = card.type;
        const artist = card.artist || CARD_CREDITS.artist;
        const creditDate = card.date || CARD_CREDITS.date;
        const article = document.createElement('article');
        article.className = `character-card character-card--type-${cardType.id}`;
        article.dataset.cardCode = code;
        article.style.setProperty('--border-color', cardType.accentColor);
        article.style.setProperty('--frame-color', cardType.frameColor);
        article.setAttribute('aria-label', `Carta de personagem jogável: ${card.title}`);

        const moraleTrack = document.createElement('aside');
        moraleTrack.className = 'character-card__morale';
        moraleTrack.setAttribute('aria-label', 'Espaços para tokens de Ânimo');
        for (let index = 0; index < 5; index += 1) {
          const slot = document.createElement('span');
          slot.className = 'character-card__morale-slot';
          slot.setAttribute('aria-label', `Espaço de Ânimo ${index + 1}`);
          moraleTrack.append(slot);
        }

        const portrait = document.createElement('div');
        portrait.className = 'character-card__portrait';
        if (card.characterImage) {
          const portraitImage = document.createElement('img');
          portraitImage.src = card.characterImage;
          portraitImage.alt = '';
          portrait.append(portraitImage);
        } else {
          const portraitPlaceholder = document.createElement('span');
          portraitPlaceholder.className = 'character-card__portrait-placeholder';
          portraitPlaceholder.textContent = card.portraitIcon || '👤';
          portraitPlaceholder.setAttribute('aria-hidden', 'true');
          portrait.append(portraitPlaceholder);
        }

        const content = document.createElement('div');
        content.className = 'character-card__content';

        const heading = document.createElement('header');
        heading.className = 'character-card__heading';
        const kicker = document.createElement('span');
        kicker.className = 'character-card__kicker';
        kicker.textContent = '👤 PERSONAGEM JOGÁVEL';
        const title = document.createElement('h1');
        title.className = 'character-card__title';
        title.textContent = card.title;
        const subtitle = document.createElement('p');
        subtitle.className = 'character-card__subtitle';
        subtitle.textContent = card.subtitle;
        heading.append(kicker, title, subtitle);

        const stats = document.createElement('div');
        stats.className = 'character-card__stats';
        stats.textContent = card.attributes;

        const actionSummary = document.createElement('div');
        actionSummary.className = 'character-card__actions';
        actionSummary.textContent = card.actions;

        const rules = document.createElement('section');
        rules.className = 'character-card__rules';
        card.rules.forEach((rule) => {
          const row = document.createElement('div');
          row.className = 'character-card__rule';
          row.style.setProperty('--rule-lines', String(rule.nr_lines || 1));
          const label = document.createElement('strong');
          label.className = 'character-card__rule-label';
          label.textContent = rule.label;
          if (Array.from(String(rule.label || '').trim()).length < 3) {
            label.classList.add('character-card__rule-label--short');
          }
          const line = document.createElement('span');
          line.textContent = rule.line;
          row.append(label, line);
          rules.append(row);
        });

        const footer = document.createElement('footer');
        footer.className = 'character-card__footer';
        footer.append(
          Object.assign(document.createElement('span'), { textContent: code }),
          Object.assign(document.createElement('span'), { textContent: `✏️ ${artist}` }),
          Object.assign(document.createElement('span'), { textContent: creditDate })
        );

        const itemDock = document.createElement('div');
        itemDock.className = 'character-card__item-dock';
        itemDock.setAttribute('aria-label', `Encaixes para ${card.inventoryLimit || 3} itens`);
        const itemSlotCount = card.inventoryLimit || 3;
        for (let index = 0; index < itemSlotCount; index += 1) {
          const itemSlot = document.createElement('span');
          itemSlot.className = 'character-card__item-slot';
          itemSlot.setAttribute('aria-label', `Encaixe de item ${index + 1}`);
          itemDock.append(itemSlot);
        }
        if (itemSlotCount > 3) itemDock.classList.add('character-card__item-dock--expanded');

        const equipmentDock = document.createElement('div');
        equipmentDock.className = 'character-card__equipment-dock';
        equipmentDock.setAttribute('aria-label', 'Encaixes para até 2 equipamentos equipados');
        for (let index = 0; index < 2; index += 1) {
          const equipmentSlot = document.createElement('span');
          equipmentSlot.className = `character-card__equipment-slot character-card__equipment-slot--${index === 0 ? 'left' : 'right'}`;
          equipmentSlot.setAttribute('aria-label', `Encaixe de equipamento ${index + 1}`);
          equipmentDock.append(equipmentSlot);
        }

        content.append(heading, stats, actionSummary, rules, footer);
        article.append(moraleTrack, portrait, content, itemDock, equipmentDock);
        attachExportedImage(article, code);
        return article;
      }



  window.ITCrowdCardRenderer = Object.freeze({
    createCard,
    createCardBack,
    createPlayerCharacterCard,
    setExportedImageMode,
    setExportedImageResolution,
    setExportedImageUsage,
  });
})();

