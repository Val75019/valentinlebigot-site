/* =========================================================
   Valentin Lebigot — site
   Pour ajouter / modifier un projet : éditer la liste PROJECTS.
   ========================================================= */
(() => {
  const A = '/assets/';
  const v = (name, poster) => ({ video: A + 'video/' + name, poster: A + 'img/' + poster });
  const i = name => A + 'img/' + name;

  /* Palette du site : 15 teintes, les seules utilisées partout (intro, projets, lignes, rail). */
  const T = {
    encre: '#14213d',   // Bleu encre
    bleu: '#1c63d7',   // Bleu roi
    sky: '#a3d3fb',   // Sky blue
    bleugris: '#96bec7',   // Bleu gris
    sauge: '#93ad8e',   // Sauge
    vertgris: '#c9d8c9',   // Vert de gris
    lavande: '#907fe8',   // Lavande
    lilas: '#d8cbf2',   // Lilas
    vermillon: '#f6301e',   // Vermillon
    brique: '#93272a',   // Brique
    corail: '#ff7a5c',   // Corail
    rose: '#e48f9f',   // Rose ancien
    paille: '#f6dc9a',   // Paille
    creme: '#f4ebdd',   // Crème
  };

  const PROJECTS = [
    {
      id: 'collection-produit', year: '2020', role: 'Branding & Design global', colors: [T.vermillon, T.paille, T.bleu],
      en: { title: 'Product collection', role: 'Branding & Overall design', desc: 'Since 2020 in Paris, Valentin Lebigot has been creating recyclable 3D objects with a bold, colourful design. Each piece reflects a responsible approach, designed for people who care about contemporary, ethical design.' },
      title: 'Collection Produit', sub: 'Valentin Lebigot',
      desc: 'Depuis 2020 à Paris, Valentin Lebigot crée des objets 3D recyclables au design audacieux et coloré. Chaque pièce reflète une démarche responsable, pensée pour une clientèle sensible au design contemporain et éthique.',
      tags: ['designproduits', 'directionartistiques', 'impression3D', 'objetsgraphiques', 'packaging', 'designresponsable'],
      media: [i('21-10-2025_Portfolio_graphisme5.jpg'), i('21-10-2025_Portfolio_graphisme.jpg'), i('21-10-2025_Portfolio_graphisme4.jpg'), i('21-10-2025_Portfolio_graphisme2.jpg'), v('Composition-5.mp4', 'Composition-5.jpg'), i('21-10-2025_Portfolio_graphisme3.jpg')],
    },
    {
      id: 'strategie-communication', year: '2020', role: 'Graphisme & Social media', colors: [T.creme, T.encre, T.sky],
      en: { title: 'Strategy & communication', role: 'Graphic design & Social media', desc: 'A digital universe designed as a coherent whole: WordPress e-shop, UX/UI, social media, newsletters and ads. Every touchpoint extends the visual identity and delivers a clear, seamless brand experience.' },
      title: 'Stratégie & communication', sub: 'Valentin Lebigot',
      desc: 'Univers digital pensé comme un ensemble cohérent : site e-shop WordPress, UX/UI, réseaux sociaux, newsletters et Ads. Chaque point de contact prolonge l’identité visuelle et assure une expérience de marque claire et continue.',
      tags: ['socialMedia', 'newsletter', 'ads', 'eshop', 'contentdesign', 'brandidentity'],
      media: [i('21-10-2025_Portfolio_graphisme20.jpg'), i('21-10-2025_Portfolio_graphisme19.jpg'), v('Composition-1_2.mp4', 'Composition-1_2.jpg')],
    },
    {
      id: 'face-a-face-marker', year: '2026', role: 'Direction artistique', colors: [T.encre, T.paille, T.rose],
      en: { title: 'Face à Face 2026 – 2027', role: 'Art direction', desc: 'For the 2026/2027 campaign of <a href="https://www.faceaface-paris.com/" target="_blank" rel="noopener">FACE A FACE Paris</a>, I supported the teams with the art direction of MARKER, a collection inspired by the gesture of drawing, bold lines and electric colours. A kraft, surreal and dreamlike universe, imagined to highlight the boldness of the frames. Photography and videos by <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.' },
      title: 'Face à Face 2026 – 2027', sub: 'Face à Face Paris',
      desc: 'Pour la campagne 2026/2027 de <a href="https://www.faceaface-paris.com/" target="_blank" rel="noopener">FACE A FACE Paris</a>, j’ai accompagné les équipes dans la direction artistique autour de MARKER, une collection inspirée par le geste du dessin, les lignes franches et les couleurs électriques. Un univers kraft, surréaliste et onirique, imaginé pour souligner l’audace des montures. Photographies et vidéos réalisées par <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.',
      tags: ['artdirection', 'campaign', 'eyewear', 'design', 'setdesign', 'branding'],
      media: [i('08-09-2026_002.jpg'), i('08-09-2026_003.jpg'), v('Composition-1.mp4', 'Composition-1.avif'), i('08-09-2026_004.jpg'), i('08-09-2026_006.jpg'), i('08-09-2026_005.jpg')],
    },
    {
      id: 'ripple', year: '2026', role: 'Retail & PLV', colors: [T.lavande, T.creme, T.sky],
      en: { title: 'Ripple', role: 'Retail & POS', desc: 'For the new optical and sun collection of <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE Paris</a>, I worked with the brand on RIPPLE, a bespoke point-of-sale display system for partner opticians. 3D-printed, the displays echo the graphic codes and colours of the collection to showcase the frames in store.' },
      title: 'Ripple', sub: 'Face à Face Paris',
      desc: 'Pour la nouvelle collection optique et solaire de <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE Paris</a>, j’ai collaboré avec la marque à la création de RIPPLE, un dispositif PLV sur-mesure destiné aux opticiens partenaires. Réalisés en impression 3D, ces présentoirs reprennent les codes graphiques et les couleurs de la collection pour mettre en valeur les montures en point de vente.',
      tags: ['retail', 'PLV', 'eyewear', 'design', '3Dprinting', 'visualmerchandising', 'branding'],
      media: [i('30-04-2026_dossier_002.jpg'), i('B.jpg'), i('B2.jpg'), i('30-04-2026_dossier_0011.jpg'), i('30-04-2026_dossier_007.jpg'), i('30-04-2026_dossier_005.jpg')],
    },
    {
      id: 'brasserie-le-s', year: '2025', role: 'Hospitality', colors: [T.brique, T.encre, T.creme],
      en: { title: 'Brasserie le S collection', role: 'Hospitality', desc: 'A bespoke tableware collection designed for Brasserie Le S, for <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> in Suresnes. Developed with <a href="https://www.snef.fr/wattdb/" target="_blank" rel="noopener">Watt</a> Design &amp; Build, it extends the architectural universe through sculptural, functional pieces.' },
      title: 'Collection Brasserie le S', sub: 'Servier Monde',
      desc: 'Collection sur mesure d’objets de table conçue pour la Brasserie Le S pour <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> à Suresnes. Développée avec <a href="https://www.snef.fr/wattdb/" target="_blank" rel="noopener">Watt</a> Design &amp; Build, elle prolonge l’univers architectural à travers des pièces sculpturales et fonctionnelles.',
      tags: ['designproduit', 'objetsgraphiques', 'directionartistique', 'impression3D', 'architectureInterieure', 'design&build'],
      media: [i('21-10-2025_Portfolio_graphisme13.jpg'), i('21-10-2025_Portfolio_graphisme15.jpg'), i('10-03-2026_00.jpg'), i('21-10-2025_Portfolio_graphisme14.jpg'), i('21-10-2025_Portfolio_graphisme16.jpg')],
    },
    {
      id: 'surval-4-all', year: '2024', role: 'Office design', colors: [T.creme, T.rose, T.bleu],
      en: { title: 'SURVAL 4\u00A0ALL collection', role: 'Office design', desc: 'Modular, colourful office products developed for the new premises of <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> in Suresnes, in collaboration with <a href="https://www.geniedeslieux.com/" target="_blank" rel="noopener">Génies des Lieux</a>, designed for functional and dynamic workspaces.' },
      title: 'Collection SURVAL 4\u00A0ALL', sub: 'Servier Monde',
      desc: 'Produits de bureau modulaires et colorés développés pour les nouveaux locaux de <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> à Suresnes, en collaboration avec <a href="https://www.geniedeslieux.com/" target="_blank" rel="noopener">Génies des Lieux</a>, pensés pour des espaces de travail fonctionnels et dynamiques.',
      tags: ['designproduit', 'objetsgraphiques', 'directionartistique', 'impression3D', 'officedesign', 'designmodulaire'],
      media: [i('21-10-2025_Portfolio_graphisme10.jpg'), i('21-10-2025_Portfolio_graphisme11.jpg'), i('21-10-2025_Portfolio_graphisme12.jpg')],
    },
    {
      id: 'born-to-be-woow', year: '2026', role: 'Branding & Retail', colors: [T.sauge, T.paille, T.rose],
      en: { title: 'Born to be WOOW', role: 'Branding & Retail', desc: 'For the 60th anniversary of Krys Group, WOOW eyewear takes the spotlight with an immersive window display kit inspired by the 1980s. The system includes banners, stickers, countercards and displays, built around the pop, colourful universe created by <a href="https://designeyeweargroup.com/fr/" target="_blank" rel="noopener">DEGREE Eyewear Group</a> and staged by the agency <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.' },
      title: 'Born to be WOOW', sub: 'WOOW x Krys Group',
      desc: 'Pour les 60 ans de Krys Group, WOOW eyewear est mis à l’honneur à travers un kit PLV vitrine immersif dédié aux années 80. Le dispositif décline bannières, stickers, countercards et présentoirs autour de l’univers pop et coloré initié par <a href="https://designeyeweargroup.com/fr/" target="_blank" rel="noopener">DEGREE Eyewear Group</a> et mis en scène par l’agence <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.',
      tags: ['retail', 'PLV', 'scénographie', 'vitrine', 'branding', 'identité', 'visualmerchandising'],
      media: [v('Fond-05-02-2026_ai-logo-Woow.mp4', 'Fond-05-02-2026_ai-logo-Woow.jpg'), i('01.jpg'), i('03-02-2026_recherches-Krys-x-Woow-13.jpg'), v('FOND-21-04-2026_jeu-echec.mp4', 'FOND-21-04-2026_jeu-echec.jpg'), i('00.jpg'), i('FOND-21-04-2026_woow-2.jpg')],
    },
    {
      id: 'scenographie-retail', year: '2025', role: 'Événementiel & Set design', colors: [T.creme, T.vertgris, T.brique],
      en: { title: 'Set design & Retail', role: 'Events & Set design', desc: 'A pop, sculptural set design created for the 30th anniversary of <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE</a> during Paris Design Week 2025. The project brings design, colour and identity into dialogue to reveal the sculptural potential of sunglasses.' },
      title: 'Scénographie & Retail', sub: 'Degree Concept Store — PDW 2025',
      desc: 'Scénographie pop et sculpturale conçue pour les 30 ans de <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE</a> lors de la Paris Design Week 2025. Le projet met en dialogue design, couleur et identité pour révéler le potentiel sculptural des solaires.',
      tags: ['retail', 'scénographie', 'impression3D', 'directionartistique', 'setdesign', 'evenementiel'],
      media: [i('21-10-2025_Portfolio_graphisme6.jpg'), i('21-10-2025_Portfolio_graphisme7.jpg'), i('21-10-2025_Portfolio_graphisme8.jpg')],
    },
    {
      id: 'trobos', year: '2020', role: 'Design produit & Packaging', colors: [T.bleu, T.rose, T.corail],
      en: { title: 'Trobos', role: 'Product design & Packaging', desc: 'TROBOS is a collection of clip-on paper clips, designed as a contemporary graphic stationery object, born from a collaboration with the Lyon-based brand <a href="https://www.papiermerveille.com/fr/" target="_blank" rel="noopener">Papier Merveille</a>.' },
      title: 'Trobos', sub: 'Papier Merveille x Valentin Lebigot',
      desc: 'TROBOS est une collection de trombones à cliper, conçue comme un objet graphique de papeterie contemporain, née de la collaboration avec la marque lyonnaise <a href="https://www.papiermerveille.com/fr/" target="_blank" rel="noopener">Papier Merveille</a>.',
      tags: ['designproduit', 'packaging', 'designresponsable', 'objetsgraphiques', 'graphisme', 'impression3D'],
      media: [i('21-10-2025_Portfolio_graphisme24.jpg'), i('21-10-2025_Portfolio_graphisme23.jpg'), v('Composition-4.mp4', 'Composition-4.jpg'), i('16-12-2025_slide-00.jpg'), i('16-12-2025_slide-002.jpg')],
    },
  ];

  // l'ordre des 3 teintes de chaque projet change à chaque visite (spectre, rail, transitions…) :
  // la teinte claire n'est pas toujours au milieu
  const shuffle3 = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  // (deux projets voisins n'ont jamais de teinte en commun : aucune teinte identique ne se touche dans le spectre)
  // ordre fixe (haut → milieu → bas) défini dans chaque projet

  // langue : la page /en/ affiche les textes anglais des projets et de l'interface
  const EN = document.documentElement.lang === 'en';
  const L = (fr, en) => (EN ? en : fr);
  if (EN) PROJECTS.forEach(p => { if (p.en) { p.title = p.en.title; p.role = p.en.role; p.desc = p.en.desc; } });

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad2 = n => String(n).padStart(2, '0');
  const esc = s => s.replace(/&(?!amp;)/g, '&amp;');
  const rand = (a, b) => a + Math.random() * (b - a);
  // image du spectre fournie pour chaque projet (assets/spectre/web : 700, 1000 et 1400 px de large, format 2:3)
  const thumbOf = p => {
    const base = A + 'spectre/web/' + p.id;
    const v = '?v=4';   // à augmenter quand une image du spectre change
    return `src="${base}-700.jpg${v}" data-srcset="${base}-700.jpg${v} 700w, ${base}-1000.jpg${v} 1000w, ${base}-1400.jpg${v} 1400w" sizes="(max-width: 900px) 100vw, (hover: none) 60vw, max(28vw, 64vh)"`;
  };

  /* ---------- 1. Spectre de l'accueil : une bande par projet ---------- */
  const spectrum = document.getElementById('spectrum');
  spectrum.innerHTML = PROJECTS.map((p, k) => `
    <a class="band" href="#${p.id}" aria-label="${esc(p.title)} — ${esc(p.sub)}">
      <span class="band__segs">${p.colors.map((c, j) => `<i style="background:${c};transition-delay:0s,${(k * 0.06 + j * 0.05).toFixed(2)}s"></i>`).join('')}</span>
      <img class="band__img" ${thumbOf(p)} alt="" loading="lazy" decoding="async"${p.cover ? ` style="object-fit:${p.cover.fit};background:${p.cover.bg}"` : ''}>
      <span class="band__num">${pad2(k + 1)}</span>
      <span class="band__label"><b>${esc(p.title)}</b><em>${esc(p.sub)}</em></span>
    </a>`).join('');
  const bands = [...spectrum.children];
  const sharpen = () => spectrum.querySelectorAll('img[data-srcset]').forEach(img => { img.srcset = img.dataset.srcset; img.removeAttribute('data-srcset'); });
  spectrum.addEventListener('pointerenter', sharpen, { once: true });
  addEventListener('load', () => setTimeout(sharpen, 2500), { once: true });
  // proportions des 3 teintes de chaque bande : elles bougent, mais deux teintes identiques
  // de bandes voisines ne doivent jamais se toucher (leurs zones ne se chevauchent jamais)
  const segsOf = b => [...b.querySelectorAll('.band__segs i')];
  bands.forEach(b => { b._c = segsOf(b).map(i => i.style.background); b._g = [10, 10, 10]; segsOf(b).forEach(i => (i.style.flexGrow = 10)); });
  const spans = g => { const t = g[0] + g[1] + g[2]; let y = 0; return g.map(v => { const a = y / t; y += v; return [a, y / t]; }); };
  const fits = (b, g) => {
    const mine = spans(g);
    return [bands[bands.indexOf(b) - 1], bands[bands.indexOf(b) + 1]].every(n => {
      if (!n) return true;
      const theirs = spans(n._g);
      return b._c.every((c, i) => n._c.every((d, j) => c !== d ||
        Math.min(mine[i][1], theirs[j][1]) - Math.max(mine[i][0], theirs[j][0]) <= 0));
    });
  };
  const drift = band => {
    for (let tries = 0; tries < 14; tries++) {
      const g = [rand(5, 18), rand(5, 18), rand(5, 18)];
      if (fits(band, g)) { band._g = g; band._t = performance.now(); segsOf(band).forEach((i, k) => (i.style.flexGrow = g[k].toFixed(2))); return; }
    }
  };
  // proportions de départ posées sans animation
  bands.forEach(b => segsOf(b).forEach(i => { i._d = i.style.transitionDelay; i.style.transition = 'none'; }));
  bands.forEach(drift);
  bands.forEach(b => (b._t = 0));
  void spectrum.offsetWidth;
  bands.forEach(b => segsOf(b).forEach(i => { i.style.transition = ''; i.style.transitionDelay = i._d; }));
  // mouvement lent et calme : une ou deux bandes se réajustent de temps en temps
  let spectrumVisible = true;
  new IntersectionObserver(es => (spectrumVisible = es[0].isIntersecting)).observe(spectrum);
  if (!reduceMotion) setInterval(() => {
    if (document.hidden || !spectrumVisible) return;
    // une bande ne bouge que si ses voisines sont immobiles : même pendant l'animation,
    // deux teintes identiques ne peuvent pas se toucher
    const now = performance.now(), still = b => !b || !b._t || now - b._t > 2800;
    const free = bands.filter((b, k) => still(b) && still(bands[k - 1]) && still(bands[k + 1]));
    if (free.length) drift(free[Math.floor(Math.random() * free.length)]);
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
        <p class="work__meta rv">${p.year} · ${esc(p.role)}</p>
        <p class="work__desc rv">${p.desc}</p>
        <ul class="tags rv">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
      <div class="work__media">${p.media.map(shot).join('')}</div>
    </section>`).join('');

  /* ---------- 3. Typographie française (comme sur le site) ---------- */
  if (!EN) (() => {
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
  const PALETTE = Object.entries(T).map(([name, c]) => ({ name, c, fam: {'encre': 'bleu', 'bleu': 'bleu', 'sky': 'bleu', 'bleugris': 'bleu', 'sauge': 'vert', 'vertgris': 'vert', 'lavande': 'violet', 'lilas': 'violet', 'vermillon': 'rouge', 'brique': 'rouge', 'corail': 'corail', 'rose': 'rose', 'paille': 'jaune', 'creme': 'clair'}[name] }));
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
      // les teintes claires (crème, paille…) tombent à une position tirée au hasard,
      // pas toujours au milieu : sinon un motif clair répétitif apparaît
      const lightSlot = Math.floor(Math.random() * 3);
      for (let j = 0; j < 3; j++) {
        const neigh = [...(k > 0 ? colors[k - 1] : []), ...(j > 0 ? [col[j - 1]] : [])];
        const ok = PALETTE.filter(p => !neigh.some(n => n.fam === p.fam));
        const pool = ok.length ? ok : PALETTE;
        let best = pool[0], bestScore = -Infinity;
        pool.forEach(p => {
          const contrast = neigh.length ? Math.min(...neigh.map(n => Math.abs(p.l - n.l))) : 0.5;
          const lightBias = p.l > 0.4 ? (j === lightSlot ? 0.5 : -0.5) : 0;
          const s = contrast * 0.8 + lightBias - usage.get(p.c) / cols * 3 + Math.random() * 0.45;
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

  // les lignes du pied de page se soulèvent doucement autour du curseur (ou du doigt), comme une onde
  if (!reduceMotion) {
    let px = null, raf = 0;
    const lift = new Map();
    const tick = () => {
      raf = 0;
      let moving = false;
      [...footLines.children].forEach(c => {
        const r = c.getBoundingClientRect();
        const dx = px === null ? 1e9 : (r.left + r.width / 2) - px;
        const goal = px === null ? 0 : 54 * Math.exp(-(dx * dx) / (2 * 90 * 90));
        const cur = lift.get(c) || 0;
        const next = cur + (goal - cur) * 0.16;
        if (Math.abs(next - cur) > 0.1) moving = true;
        lift.set(c, next);
        c.style.top = (-next).toFixed(1) + 'px';
      });
      if (moving) raf = requestAnimationFrame(tick);
    };
    const go = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const zone = document.getElementById('contact');
    zone.addEventListener('pointermove', e => { px = e.clientX; go(); });
    zone.addEventListener('pointerleave', () => { px = null; go(); });
    zone.addEventListener('touchmove', e => { px = e.touches[0].clientX; go(); }, { passive: true });
    zone.addEventListener('touchend', () => { px = null; go(); });
  }

  /* ---------- 5. Section active : couleurs, navigation, titre en haut ---------- */
  const sections = [...document.querySelectorAll('.work, .about, .contact')];
  const navLinks = [...document.querySelectorAll('.head__nav a')];
  let current = null;
  const setActive = sec => {
    if (sec === current) return;
    current = sec;
    const cols = (sec ? sec.dataset.colors : [T.bleu, T.creme, T.brique].join(',')).split(',');
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
  document.querySelectorAll('.rv, .shot, .contact__title .rise, .about__name .rise').forEach(el => revealObs.observe(el));
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

  /* ---------- 8c. Rail-sommaire (mobile) ----------
     Le rail coloré de gauche devient le sommaire : on le touche, il se déploie
     en 9 segments aux couleurs des projets ; on glisse le doigt pour parcourir,
     on relâche (ou on touche un nom) pour y aller.                           */
  const rn = document.createElement('nav');
  rn.className = 'railnav';
  rn.setAttribute('aria-label', L('Sommaire des projets', 'Project index'));
  rn.innerHTML = `<div class="railnav__scrim"></div><div class="railnav__drawer"><p class="railnav__title">${L('Projets', 'Projects')}</p><ol class="railnav__list">${PROJECTS.map((p, k) => `
    <li><a href="#${p.id}" data-i="${k}"><span class="railnav__bar">${p.colors.map(c => `<i style="background:${c}"></i>`).join('')}</span>
      <span class="railnav__label"><em>${pad2(k + 1)}</em>${esc(p.title)}</span></a></li>`).join('')}</ol></div>
    <button class="railnav__hit" aria-label="${L('Ouvrir le sommaire des projets', 'Open the project index')}"></button>
    <button class="railnav__back" aria-label="${L('Revenir', 'Back')}">←</button>`;
  body.appendChild(rn);
  const rnHit = rn.querySelector('.railnav__hit');
  const rnList = rn.querySelector('.railnav__list');
  const rnItems = [...rn.querySelectorAll('.railnav__list a')];
  const workEls = [...document.querySelectorAll('.work')];
  let rnOn = -1, rnPressed = false, rnDragged = false, rnWasOpen = false, rnY0 = 0;
  const rnSet = i => {
    if (i === rnOn) return;
    rnOn = i;
    rnItems.forEach((a, k) => a.classList.toggle('is-on', k === i));
    if (navigator.vibrate) navigator.vibrate(4);
  };
  const rnIndexAt = y => {
    const r = rnList.getBoundingClientRect();
    return Math.max(0, Math.min(PROJECTS.length - 1, Math.floor((y - r.top) / r.height * PROJECTS.length)));
  };
  const rnCurrent = () => {
    const mid = innerHeight / 2;
    let k = workEls.findIndex(w => { const r = w.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; });
    return k < 0 ? 0 : k;
  };
  let rnOpenPanel = () => {}, rnClosePanel = f => f && f();   // reliés au gestionnaire de panneaux plus bas
  const rnOnOpen = () => { rnOn = -1; rnSet(rnCurrent()); rnPY = null; rnWave(); };
  const rnOpen = () => rnOpenPanel();
  const rnClose = () => rnClosePanel();
  const rnGo = i => {
    const t = workEls[i];
    rnClosePanel(() => t && t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }));
  };
  rnHit.addEventListener('pointerdown', e => {
    e.preventDefault();
    try { rnHit.setPointerCapture(e.pointerId); } catch (_) {}
    rnWasOpen = rn.classList.contains('open');
    rnPressed = true; rnDragged = false; rnY0 = e.clientY;
    if (!rnWasOpen) rnOpen();             // à l'ouverture : le projet en cours est mis en avant
    else rnSet(rnIndexAt(e.clientY));
  });
  rnHit.addEventListener('pointermove', e => {
    if (!rnPressed) return;
    if (Math.abs(e.clientY - rnY0) > 8) rnDragged = true;
    rnPY = e.clientY; rnWave();
    if (rnDragged) rnSet(rnIndexAt(e.clientY));
  });
  rnHit.addEventListener('pointerup', () => {
    if (!rnPressed) return;
    rnPressed = false;
    if (rnDragged || rnWasOpen) rnGo(rnOn);      // glissé, ou second toucher : on y va
  });
  rnHit.addEventListener('pointercancel', () => { rnPressed = false; });
  const rnBars = rnItems.map(a => a.querySelector('.railnav__bar'));
  const rnW = rnBars.map(() => 14);
  let rnPY = null, rnRaf = 0;
  const rnTick = () => {
    rnRaf = 0;
    let moving = false;
    rnBars.forEach((b, k) => {
      const r = b.getBoundingClientRect(), d = rnPY === null ? 1e9 : (r.top + r.height / 2) - rnPY;
      const goal = 14 + (k === rnOn ? 12 : 0) + (rnPY === null ? 0 : 30 * Math.exp(-(d * d) / (2 * 55 * 55)));
      const next = rnW[k] + (goal - rnW[k]) * 0.2;
      if (Math.abs(next - rnW[k]) > 0.1) moving = true;
      rnW[k] = next; b.style.width = next.toFixed(1) + 'px';
    });
    if (moving || rn.classList.contains('open')) rnRaf = requestAnimationFrame(rnTick);
  };
  const rnWave = () => { if (!rnRaf) rnRaf = requestAnimationFrame(rnTick); };
  rn.addEventListener('pointermove', e => { if (rn.classList.contains('open')) { rnPY = e.clientY; rnWave(); } });
  rn.addEventListener('pointerleave', () => { rnPY = null; });
  // à la souris : le projet survolé ressort
  rnItems.forEach((a, k) => a.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && rn.classList.contains('open')) rnSet(k); }));
  rnItems.forEach((a, k) => a.addEventListener('click', e => { e.preventDefault(); rnGo(k); }));
  rn.querySelector('.railnav__scrim').addEventListener('click', rnClose);
  rn.querySelector('.railnav__back').addEventListener('click', rnClose);

  /* ---------- 8d. Desktop : menu déroulant « Projets » ----------
     Au survol (ou au clavier) du lien « Projets », un sommaire des 9 projets se déroule. */
  const navProjets = document.querySelector('.head__nav a[data-nav="projets"]');
  const drop = document.createElement('div');
  drop.className = 'navdrop';
  drop.setAttribute('role', 'menu');
  // même principe graphique que le sommaire mobile : ligne tricolore, numéro, titre
  drop.innerHTML = `<p class="navdrop__title">${L('Projets', 'Projects')}</p><ol>${PROJECTS.map((p, k) => `
    <li><a href="#${p.id}" role="menuitem" style="--d:${(k * 0.03).toFixed(3)}s">
      <span class="navdrop__bar">${p.colors.map(c => `<i style="background:${c}"></i>`).join('')}</span>
      <span class="navdrop__label"><em>${pad2(k + 1)}</em>${esc(p.title)}</span></a></li>`).join('')}</ol>`;
  document.getElementById('head').appendChild(drop);
  let dropTimer = 0;
  const dropDesk = matchMedia('(min-width: 901px) and (hover: hover)');
  const dropOpen = () => {
    if (!dropDesk.matches) return;
    clearTimeout(dropTimer);
    drop.classList.add('open');
    navProjets.setAttribute('aria-expanded', 'true');
  };
  const dropClose = (now) => {
    clearTimeout(dropTimer);
    dropTimer = setTimeout(() => { drop.classList.remove('open'); navProjets.setAttribute('aria-expanded', 'false'); }, now ? 0 : 220);
  };
  navProjets.setAttribute('aria-haspopup', 'true');
  navProjets.setAttribute('aria-expanded', 'false');
  [navProjets, drop].forEach(el => {
    el.addEventListener('mouseenter', dropOpen);
    el.addEventListener('mouseleave', () => dropClose());
  });
  navProjets.addEventListener('focus', dropOpen);
  drop.addEventListener('focusout', e => { if (!drop.contains(e.relatedTarget) && e.relatedTarget !== navProjets) dropClose(true); });
  drop.addEventListener('click', e => { if (e.target.closest('a')) dropClose(true); });
  addEventListener('keydown', e => { if (e.key === 'Escape') dropClose(true); });
  addEventListener('scroll', () => drop.classList.contains('open') && !drop.matches(':hover') && dropClose(true), { passive: true });

  /* ---------- 9. Menu mobile + accordéons + année ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  // Deux panneaux sur mobile : le menu (Projets, À propos, Contact) et le sommaire des projets.
  // Un seul ouvert à la fois ; la croix de l'en-tête et le bouton retour du téléphone les ferment.
  let panel = null, afterClose = null;
  const showPanel = (name, on) => {
    if (name === 'menu') nav.classList.toggle('open', on);
    if (name === 'rail') rn.classList.toggle('open', on);
  };
  const openPanel = name => {
    if (panel === name) return;
    if (panel) showPanel(panel, false);
    else history.pushState({ panel: 1 }, '');
    panel = name;
    showPanel(name, true);
    if (name === 'menu') { burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', L('Fermer', 'Close')); }
    body.classList.add(name === 'menu' ? 'menu-open' : 'rail-open');
    body.classList.remove(name === 'menu' ? 'rail-open' : 'menu-open');
    if (name === 'rail') rnOnOpen();
  };
  const closePanel = then => {
    if (!panel) { then && then(); return; }
    showPanel(panel, false);
    panel = null;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Menu');
    body.classList.remove('menu-open', 'rail-open');
    if (history.state && history.state.panel) { afterClose = then || null; history.back(); }
    else if (then) then();
  };
  addEventListener('popstate', () => {
    if (panel) closePanel();                       // retour du téléphone : ferme le panneau ouvert
    if (afterClose) { const f = afterClose; afterClose = null; setTimeout(f, 30); }
  });
  rnOpenPanel = () => openPanel('rail');
  rnClosePanel = closePanel;
  burger.addEventListener('click', () => (panel === 'menu' ? closePanel() : openPanel('menu')));
  addEventListener('keydown', e => { if (e.key === 'Escape' && panel) closePanel(); });
  const goTo = (target, hash) => closePanel(() => {
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', hash);
  });
  // clic dans le menu : « Projets » ouvre le sommaire (mobile), les autres liens mènent à leur section
  nav.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || !nav.classList.contains('open')) return;
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) goTo(target, a.getAttribute('href')); else closePanel();
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
  document.querySelectorAll('.lang a').forEach(a => a.addEventListener('click', () => { if (location.hash) a.href = a.getAttribute('href') + location.hash; }));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
