(() => {
  const { CARD_CREDITS, CARD_TYPES } = window.ITCrowdCardData;

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
        if (cardType.artRoot) {
          const illustration = document.createElement('img');
          illustration.src = `${cardType.artRoot}${code.toLowerCase()}.png`;
          illustration.alt = '';
          illustration.addEventListener('error', () => illustration.remove());
          artSlot.append(illustration);
        }

        const rules = document.createElement('section');
        rules.className = 'rules';
        const ruleRows = card.rules || [...(card.resolve || []), ...(card.enroll ? [card.enroll] : [])];
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
        article.style.setProperty('--border-color', cardType.accentColor);
        article.style.setProperty('--frame-color', cardType.frameColor);
        article.setAttribute('aria-label', `Carta de personagem jogável: ${card.title}`);

        const portrait = document.createElement('div');
        portrait.className = 'character-card__portrait';
        const portraitImage = document.createElement('img');
        portraitImage.src = card.characterImage;
        portraitImage.alt = '';
        portrait.append(portraitImage);

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
          label.textContent = rule.label;
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

        content.append(heading, stats, actionSummary, rules, footer);
        article.append(portrait, content);
        return article;
      }



  window.ITCrowdCardRenderer = Object.freeze({
    createCard,
    createCardBack,
    createPlayerCharacterCard,
  });
})();

