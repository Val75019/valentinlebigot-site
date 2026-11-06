/* =========================================================
   Valentin Lebigot — site
   Pour ajouter / modifier un projet : éditer la liste PROJECTS.
   ========================================================= */
(() => {
  const A = 'assets/';
  const v = (name, poster) => ({ video: A + 'video/' + name, poster: A + 'img/' + poster });
  const i = name => A + 'img/' + name;

  const PROJECTS = [
    {
      id: 'collection-produit', colors: ['#448ec0', '#f9e1af', '#f87e6c'],
      title: 'Collection Produit', sub: 'Valentin Lebigot',
      desc: 'Depuis 2020 à Paris, Valentin Lebigot crée des objets 3D recyclables au design audacieux et coloré. Chaque pièce reflète une démarche responsable, pensée pour une clientèle sensible au design contemporain et éthique.',
      tags: ['designproduits', 'directionartistiques', 'impression3D', 'objetsgraphiques', 'packaging', 'designresponsable'],
      media: [i('21-10-2025_Portfolio_graphisme5.jpg'), i('21-10-2025_Portfolio_graphisme.jpg'), i('21-10-2025_Portfolio_graphisme4.jpg'), i('21-10-2025_Portfolio_graphisme2.jpg'), v('Composition-5.mp4', 'Composition-5.jpg'), i('21-10-2025_Portfolio_graphisme3.jpg')],
    },
    {
      id: 'strategie-communication', colors: ['#006ff7', '#f1dfa6', '#0c186c'],
      title: 'Stratégie & communication', sub: 'Valentin Lebigot',
      desc: 'Univers digital pensé comme un ensemble cohérent : site e-shop WordPress, UX/UI, réseaux sociaux, newsletters et Ads. Chaque point de contact prolonge l’identité visuelle et assure une expérience de marque claire et continue.',
      tags: ['socialMedia', 'newsletter', 'ads', 'eshop', 'contentdesign', 'brandidentity'],
      media: [i('21-10-2025_Portfolio_graphisme20.jpg'), i('21-10-2025_Portfolio_graphisme19.jpg'), v('Composition-1_2.mp4', 'Composition-1_2.jpg')],
    },
    {
      id: 'face-a-face-marker', colors: ['#171644', '#fcf9c8', '#ca6f68'],
      title: 'Face à Face 2026 – 2027', sub: 'Face à Face Paris',
      desc: 'Pour la campagne 2026/2027 de <a href="https://www.faceaface-paris.com/" target="_blank" rel="noopener">FACE A FACE Paris</a>, j’ai accompagné les équipes dans la direction artistique autour de MARKER, une collection inspirée par le geste du dessin, les lignes franches et les couleurs électriques. Un univers kraft, surréaliste et onirique, imaginé pour souligner l’audace des montures. Photographies et vidéos réalisées par <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.',
      tags: ['artdirection', 'campaign', 'eyewear', 'design', 'setdesign', 'branding'],
      media: [i('08-09-2026_002.jpg'), i('08-09-2026_003.jpg'), v('Composition-1.mp4', 'Composition-1.avif'), i('08-09-2026_004.jpg'), i('08-09-2026_006.jpg'), i('08-09-2026_005.jpg')],
    },
    {
      id: 'ripple', colors: ['#8a74c4', '#e9dfbd', '#cbb6e2'],
      title: 'Ripple', sub: 'Face à Face Paris',
      desc: 'Pour la nouvelle collection optique et solaire de <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE Paris</a>, j’ai collaboré avec la marque à la création de RIPPLE, un dispositif PLV sur-mesure destiné aux opticiens partenaires. Réalisés en impression 3D, ces présentoirs reprennent les codes graphiques et les couleurs de la collection pour mettre en valeur les montures en point de vente.',
      tags: ['retail', 'PLV', 'eyewear', 'design', '3Dprinting', 'visualmerchandising', 'branding'],
      media: [i('30-04-2026_dossier_002.jpg'), i('B.jpg'), i('B2.jpg'), i('30-04-2026_dossier_0011.jpg'), i('30-04-2026_dossier_007.jpg'), i('30-04-2026_dossier_005.jpg')],
    },
    {
      id: 'brasserie-le-s', colors: ['#0b3252', '#cdb284', '#8f291c'],
      title: 'Collection Brasserie le S', sub: 'Servier Monde',
      desc: 'Collection sur mesure d’objets de table conçue pour la Brasserie Le S pour <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> à Suresnes. Développée avec <a href="https://www.snef.fr/wattdb/" target="_blank" rel="noopener">Watt</a> Design &amp; Build, elle prolonge l’univers architectural à travers des pièces sculpturales et fonctionnelles.',
      tags: ['designproduit', 'objetsgraphiques', 'directionartistique', 'impression3D', 'architectureInterieure', 'design&build'],
      media: [i('21-10-2025_Portfolio_graphisme13.jpg'), i('21-10-2025_Portfolio_graphisme15.jpg'), i('10-03-2026_00.jpg'), i('21-10-2025_Portfolio_graphisme14.jpg'), i('21-10-2025_Portfolio_graphisme16.jpg')],
    },
    {
      id: 'surval-4-all', colors: ['#004099', '#f4e6c6', '#fa7844'],
      title: 'Collection SURVAL 4\u00A0ALL', sub: 'Servier Monde',
      desc: 'Produits de bureau modulaires et colorés développés pour les nouveaux locaux de <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> à Suresnes, en collaboration avec <a href="https://www.geniedeslieux.com/" target="_blank" rel="noopener">Génies des Lieux</a>, pensés pour des espaces de travail fonctionnels et dynamiques.',
      tags: ['designproduit', 'objetsgraphiques', 'directionartistique', 'impression3D', 'officedesign', 'designmodulaire'],
      media: [i('21-10-2025_Portfolio_graphisme10.jpg'), i('21-10-2025_Portfolio_graphisme11.jpg'), i('21-10-2025_Portfolio_graphisme12.jpg')],
    },
    {
      id: 'born-to-be-woow', colors: ['#e0628f', '#f7efb7', '#b67c5d'],
      title: 'Born to be WOOW', sub: 'WOOW x Krys Group',
      desc: 'Pour les 60 ans de Krys Group, WOOW eyewear est mis à l’honneur à travers un kit PLV vitrine immersif dédié aux années 80. Le dispositif décline bannières, stickers, countercards et présentoirs autour de l’univers pop et coloré initié par <a href="https://designeyeweargroup.com/fr/" target="_blank" rel="noopener">DEGREE Eyewear Group</a> et mis en scène par l’agence <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.',
      tags: ['retail', 'PLV', 'scénographie', 'vitrine', 'branding', 'identité', 'visualmerchandising'],
      media: [v('Fond-05-02-2026_ai-logo-Woow.mp4', 'Fond-05-02-2026_ai-logo-Woow.jpg'), i('01.jpg'), i('03-02-2026_recherches-Krys-x-Woow-13.jpg'), v('FOND-21-04-2026_jeu-echec.mp4', 'FOND-21-04-2026_jeu-echec.jpg'), i('00.jpg'), i('FOND-21-04-2026_woow-2.jpg')],
    },
    {
      id: 'scenographie-retail', colors: ['#9e514c', '#f8b956', '#e18a45'],
      title: 'Scénographie & Retail', sub: 'Degree Concept Store — PDW 2025',
      desc: 'Scénographie pop et sculpturale conçue pour les 30 ans de <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE</a> lors de la Paris Design Week 2025. Le projet met en dialogue design, couleur et identité pour révéler le potentiel sculptural des solaires.',
      tags: ['retail', 'scénographie', 'impression3D', 'directionartistique', 'setdesign', 'evenementiel'],
      media: [i('21-10-2025_Portfolio_graphisme6.jpg'), i('21-10-2025_Portfolio_graphisme7.jpg'), i('21-10-2025_Portfolio_graphisme8.jpg')],
    },
    {
      id: 'trobos', colors: ['#0a0ab1', '#fdbdcc', '#f35d58'],
      title: 'Trobos', sub: 'Papier Merveille x Valentin Lebigot',
      desc: 'TROBOS est une collection de trombones à cliper, conçue comme un objet graphique de papeterie contemporain, née de la collaboration avec la marque lyonnaise <a href="https://www.papiermerveille.com/fr/" target="_blank" rel="noopener">Papier Merveille</a>.',
      tags: ['designproduit', 'packaging', 'designresponsable', 'objetsgraphiques', 'graphisme', 'impression3D'],
      media: [i('21-10-2025_Portfolio_graphisme24.jpg'), i('21-10-2025_Portfolio_graphisme23.jpg'), v('Composition-4.mp4', 'Composition-4.jpg'), i('16-12-2025_slide-00.jpg'), i('16-12-2025_slide-002.jpg')],
    },
  ];

  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad2 = n => String(n).padStart(2, '0');
  const esc = s => s.replace(/&(?!amp;)/g, '&amp;');
  const rand = (a, b) => a + Math.random() * (b - a);
  // image du spectre fournie pour chaque projet (assets/spectre/web : 700, 1000 et 1400 px de large, format 2:3)
  const thumbOf = p => {
    const base = A + 'spectre/web/' + p.id;
    return `src="${base}-700.jpg" data-srcset="${base}-700.jpg 700w, ${base}-1000.jpg 1000w, ${base}-1400.jpg 1400w" sizes="(max-width: 900px) 100vw, (hover: none) 60vw, max(28vw, 64vh)"`;
  };

  /* ---------- 1. Spectre de l'accueil : une bande par projet ---------- */
  const spectrum = document.getElementById('spectrum');
  spectrum.innerHTML = PROJECTS.map((p, k) => `
    <a class="band" href="#${p.id}" aria-label="${esc(p.title)} — ${esc(p.sub)}">
      <span class="band__segs">${p.colors.map((c, j) => `<i style="background:${c};transition-delay:0s,${(k * 0.06 + j * 0.05).toFixed(2)}s"></i>`).join('')}</span>
      <img class="band__img" ${thumbOf(p)} alt="" loading="lazy" decoding="async">
      <span class="band__num">${pad2(k + 1)}</span>
      <span class="band__label"><b>${esc(p.title)}</b><em>${esc(p.sub)}</em></span>
    </a>`).join('');
  const bands = [...spectrum.children];
  const sharpen = () => spectrum.querySelectorAll('img[data-srcset]').forEach(img => { img.srcset = img.dataset.srcset; img.removeAttribute('data-srcset'); });
  spectrum.addEventListener('pointerenter', sharpen, { once: true });
  addEventListener('load', () => setTimeout(sharpen, 2500), { once: true });
  const drift = band => [...band.querySelectorAll('.band__segs i')].forEach(s => (s.style.flexGrow = rand(4, 22).toFixed(1)));
  bands.forEach(drift);
  // mouvement lent et calme : une ou deux bandes se réajustent de temps en temps
  let spectrumVisible = true;
  new IntersectionObserver(es => (spectrumVisible = es[0].isIntersecting)).observe(spectrum);
  if (!reduceMotion) setInterval(() => {
    if (document.hidden || !spectrumVisible) return;
    for (let k = 0; k < 2; k++) drift(bands[Math.floor(Math.random() * bands.length)]);
  }, 1800);

  // bandes horizontales (mobile, tactile) : une seule bande, la plus proche du centre de l'écran, dévoile son image
  const listMode = matchMedia('(max-width: 900px), (hover: none)');
  let onBand = null, onTick = false;
  const pickBand = () => {
    onTick = false;
    let best = null;
    if (listMode.matches && spectrumVisible) {
      const mid = innerHeight / 2;
      let d = Infinity;
      bands.forEach(b => {
        const r = b.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (r.bottom > 0 && r.top < innerHeight && dist < d) { d = dist; best = b; }
      });
    }
    if (best !== onBand) { onBand && onBand.classList.remove('is-on'); best && best.classList.add('is-on'); onBand = best; }
  };
  addEventListener('scroll', () => { if (!onTick) { onTick = true; requestAnimationFrame(pickBand); } }, { passive: true });
  addEventListener('resize', pickBand);
  setTimeout(pickBand, 1800);

  /* ---------- 2. Projets : texte fixe à gauche, images à droite, rail tricolore ---------- */
  const shot = m => typeof m === 'string'
    ? `<figure class="shot"><img src="${m}" alt="" loading="lazy" decoding="async"></figure>`
    : `<figure class="shot"><video src="${m.video}" poster="${m.poster}" muted loop playsinline preload="none"></video></figure>`;
  document.getElementById('projets').innerHTML = PROJECTS.map((p, k) => `
    <section class="work" id="${p.id}" data-colors="${p.colors}" data-label="${esc(p.title)}" data-num="${pad2(k + 1)}"
      style="--w1:${p.colors[0]};--w2:${p.colors[1]};--w3:${p.colors[2]}">
      <div class="work__rail" aria-hidden="true"><div><i></i><i></i><i></i></div></div>
      <div class="work__aside">
        <p class="work__num rv"><span class="tri"></span>${pad2(k + 1)} / ${pad2(PROJECTS.length)}</p>
        <h2 class="work__title rv">${esc(p.title)}</h2>
        <p class="work__client rv">${esc(p.sub)}</p>
        <p class="work__desc rv">${p.desc}</p>
        <ul class="tags rv">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
      <div class="work__media">${p.media.map(shot).join('')}</div>
    </section>`).join('');

  /* ---------- 3. Typographie française (comme sur le site) ---------- */
  (() => {
    const SMALL = ['à', 'a', 'au', 'aux', 'de', 'du', 'des', 'd’', 'le', 'la', 'les', 'l’', 'un', 'une',
      'et', 'ou', 'ni', 'en', 'dans', 'par', 'pour', 'sur', 'sous', 'avec', 'sans', 'chez', 'vers', 'entre',
      'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'leur', 'leurs', 'qui', 'que',
      'ne', 'y', 'il', 'elle', 'on', 'je', 'j’', 'x', '&', '–', '—', '-', '|'];
    const NB = ' ';
    const rx = w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reSmall = new RegExp(`(^|[\\s(«“])(${SMALL.map(rx).join('|')})[ \\t\\n]+`, 'giu');
    const fix = t => t
      .replace(/(\d)[ \t\n]+([–—-])[ \t\n]+(\d)/g, `$1${NB}$2\u2060${NB}$3`)   // 2026 – 2027 : jamais coupé
      .replace(reSmall, (m, b, w) => b + w + NB)
      .replace(reSmall, (m, b, w) => b + w + NB)
      .replace(/[ \t\n]+([:;!?»])/g, `${NB}$1`)
      .replace(/(«)[ \t\n]+/g, `$1${NB}`)
      .replace(/(\p{L})-(?=\p{L})/gu, '$1⁠-⁠');
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest('script, style, .intro, .tags') || !n.nodeValue.trim()
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => { const f = fix(n.nodeValue); if (f !== n.nodeValue) n.nodeValue = f; });
  })();

  /* ---------- 4. Lignes colorées (intro + pied de page) ---------- */
  const PALETTE = [
    { c: '#0050a0', fam: 'bleu' }, { c: '#b7d0ef', fam: 'bleu' },
    { c: '#f53216', fam: 'rouge' }, { c: '#82201c', fam: 'rouge' },
    { c: '#fdf3b0', fam: 'clair' }, { c: '#f6f6f6', fam: 'clair' },
    { c: '#c9a6fb', fam: 'lavande' }, { c: '#2b3a25', fam: 'vert' },
  ];
  const lum = hex => {
    const x = [1, 3, 5].map(j => parseInt(hex.substr(j, 2), 16) / 255)
      .map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * x[0] + 0.7152 * x[1] + 0.0722 * x[2];
  };
  PALETTE.forEach(p => (p.l = lum(p.c)));
  const buildLines = (container, lineW) => {
    const cols = Math.ceil(innerWidth / lineW);
    const usage = new Map(PALETTE.map(p => [p.c, 0]));
    const colors = [];
    for (let k = 0; k < cols; k++) {
      const col = [];
      for (let j = 0; j < 3; j++) {
        const neigh = [...(k > 0 ? colors[k - 1] : []), ...(j > 0 ? [col[j - 1]] : [])];
        const ok = PALETTE.filter(p => !neigh.some(n => n.fam === p.fam));
        const pool = ok.length ? ok : PALETTE;
        let best = pool[0], bestScore = -Infinity;
        pool.forEach(p => {
          const contrast = neigh.length ? Math.min(...neigh.map(n => Math.abs(p.l - n.l))) : 0.5;
          const s = contrast * 1.2 - usage.get(p.c) / cols * 3 + Math.random() * 0.35;
          if (s > bestScore) { bestScore = s; best = p; }
        });
        col.push(best); usage.set(best.c, usage.get(best.c) + 1);
      }
      colors.push(col);
    }
    container.innerHTML = colors.map(col =>
      `<div class="intro__col" style="width:${lineW}px">${col.map(p => `<span class="intro__seg" style="background:${p.c};flex-grow:${rand(6, 30).toFixed(1)}"></span>`).join('')}</div>`
    ).join('');
    return [...container.children];
  };
  const shuffle = col => [...col.children].forEach(s => {
    s.style.transitionDuration = rand(0.6, 1.2).toFixed(2) + 's';
    s.style.flexGrow = rand(6, 30).toFixed(1);
  });

  // largeur des lignes = largeur du rail coloré des projets (12 px desktop, 8 px mobile) : tout reste cohérent
  const railW = () => parseFloat(getComputedStyle(root).getPropertyValue('--rail')) || 12;
  const lineW = railW();
  const hero = document.getElementById('hero');
  const start = () => { body.classList.remove('is-loading'); hero.classList.add('in'); };
  const intro = document.getElementById('intro');
  if (!reduceMotion) {
    const cols = buildLines(intro, lineW);
    const MOVE_UNTIL = 1200;
    cols.forEach(c => { const m = 1 + Math.floor(Math.random() * 3); for (let k = 0; k < m; k++) setTimeout(() => shuffle(c), rand(80, MOVE_UNTIL)); });
    setTimeout(() => {
      cols.forEach(c => { c.style.transitionDelay = rand(0, .5).toFixed(2) + 's'; c.style.transform = 'translateY(-101%)'; });
      setTimeout(start, 300);
      setTimeout(() => intro.classList.add('done'), 1600);
    }, MOVE_UNTIL + 150);
  } else { intro.classList.add('done'); start(); }

  // pied de page : lignes de même hauteur, légèrement décalées, qui ondulent chacune à son rythme
  const footLines = document.getElementById('footLines');
  const buildFoot = () => {
    buildLines(footLines, railW()).forEach(c => {
      c.style.transitionDelay = rand(0, .35).toFixed(2) + 's';
      c.style.setProperty('--amp', rand(10, 34).toFixed(0) + 'px');
      c.style.setProperty('--dur', rand(2.4, 4.6).toFixed(2) + 's');
      c.style.setProperty('--dl', (-rand(0, 4.6)).toFixed(2) + 's');
    });
  };
  buildFoot();
  let lastW = innerWidth;
  addEventListener('resize', () => {
    clearTimeout(buildFoot.t);
    buildFoot.t = setTimeout(() => { if (Math.abs(innerWidth - lastW) > 40) { lastW = innerWidth; buildFoot(); } }, 250);
  });

  /* ---------- 5. Section active : couleurs, navigation, titre en haut ---------- */
  const sections = [...document.querySelectorAll('.work, .about, .contact')];
  const navLinks = [...document.querySelectorAll('.head__nav a')];
  let current = null;
  const setActive = sec => {
    if (sec === current) return;
    current = sec;
    const cols = (sec ? sec.dataset.colors : '#02549d,#f7f4ca,#82201c').split(',');
    ['--c1', '--c2', '--c3'].forEach((v, k) => root.style.setProperty(v, cols[k]));
    const key = !sec ? '' : sec.classList.contains('work') ? 'projets' : sec.id;
    navLinks.forEach(a => a.classList.toggle('is-active', a.dataset.nav === key));
  };
  const activeObs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) setActive(e.target);
    else if (e.target === sections[0] && e.boundingClientRect.top > 0) setActive(null);
  }), { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => activeObs.observe(s));

  /* ---------- 6. Apparitions ---------- */
  const revealObs = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    revealObs.unobserve(e.target);
  }), { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
  document.querySelectorAll('.rv, .shot, .contact__title .rise').forEach(el => revealObs.observe(el));
  new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.2 })
    .observe(document.getElementById('contact'));

  /* ---------- 7. Vidéos visibles uniquement ---------- */
  const vidObs = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
  }), { threshold: 0.25 });
  document.querySelectorAll('video').forEach(v => vidObs.observe(v));

  /* ---------- 8. Rail de progression + en-tête ---------- */
  const works = [...document.querySelectorAll('.work')].map(el => ({ el, rail: el.querySelector('.work__rail > div') }));
  const head = document.getElementById('head');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const vh = innerHeight;
    head.classList.toggle('is-solid', scrollY > 10);
    works.forEach(({ el, rail }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -50 || r.top > vh + 50) return;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (r.height)));
      rail.style.setProperty('--p', p.toFixed(4));
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- 8b. Texte des projets : reste visible pendant le scroll ----------
     Si le texte est plus haut que l'écran, il défile d'abord jusqu'à sa fin
     puis reste accroché : rien n'est jamais coupé.                          */
  const asides = [...document.querySelectorAll('.work__aside')];
  const fitAsides = () => {
    const headH = head.offsetHeight;
    asides.forEach(a => {
      const room = innerHeight - a.offsetHeight - 24;
      a.style.setProperty('--stick', Math.min(headH + 20, room) + 'px');
    });
  };
  fitAsides();
  addEventListener('resize', () => { clearTimeout(fitAsides.t); fitAsides.t = setTimeout(fitAsides, 150); });
  document.fonts && document.fonts.ready.then(fitAsides);

  /* ---------- 9. Menu mobile + accordéons + année ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
    body.classList.toggle('menu-open', open);
  });
  // clic dans le menu : on ferme, on débloque le défilement, puis on va à la section
  nav.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    const wasOpen = nav.classList.contains('open');
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    body.classList.remove('menu-open');
    if (!target || !wasOpen) return;
    e.preventDefault();
    setTimeout(() => {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', a.getAttribute('href'));
    }, 20);
  });

  document.querySelectorAll('.accordion details').forEach(d => {
    const s = d.querySelector('summary');
    s.addEventListener('click', e => {
      e.preventDefault();
      if (d.classList.contains('is-open')) {
        d.classList.remove('is-open');
        setTimeout(() => { if (!d.classList.contains('is-open')) d.open = false; }, 550);
      } else { d.open = true; requestAnimationFrame(() => d.classList.add('is-open')); }
    });
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
