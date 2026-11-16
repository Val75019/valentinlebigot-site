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
      en: { title: 'Collection –\u00A0VL', role: 'Branding & Overall design', desc: 'A collection of recyclable 3D objects with a bold, colourful design, created in Paris since 2020. Each piece reflects a responsible approach, designed for people who care about contemporary, ethical design.' },
      title: 'Collection –\u00A0VL', sub: 'Valentin Lebigot',
      desc: 'Collection d’objets 3D recyclables au design audacieux et coloré, créée à Paris depuis 2020. Chaque pièce reflète une démarche responsable, pensée pour une clientèle sensible au design contemporain et éthique.',
      tags: ['designproduits', 'directionartistiques', 'impression3D', 'objetsgraphiques', 'packaging', 'designresponsable'],
      media: [i('21-10-2025_Portfolio_graphisme5.jpg'), v('Corpus_dynamique_1600x1132.mp4', 'Corpus_dynamique_1600x1132.jpg'), i('21-10-2025_Portfolio_graphisme.jpg'), i('21-10-2025_Portfolio_graphisme4.jpg'), i('21-10-2025_Portfolio_graphisme2.jpg'), v('Composition-5.mp4', 'Composition-5.jpg'), i('21-10-2025_Portfolio_graphisme3.jpg')],
    },
    {
      id: 'strategie-communication', year: '2020', role: 'Social media', colors: [T.creme, T.encre, T.sky],
      en: { title: 'Strategy & Communication –\u00A0VL', role: 'Social media', desc: 'A digital universe designed as a coherent whole: WordPress e-shop, UX/UI, social media, newsletters and ads. Every touchpoint extends the visual identity and delivers a clear, seamless brand experience.' },
      title: 'Stratégie & Communication –\u00A0VL', sub: 'Valentin Lebigot',
      desc: 'Univers digital pensé comme un ensemble cohérent : site e-shop WordPress, UX/UI, réseaux sociaux, newsletters et Ads. Chaque point de contact prolonge l’identité visuelle et assure une expérience de marque claire et continue.',
      tags: ['socialMedia', 'newsletter', 'ads', 'eshop', 'contentdesign', 'brandidentity'],
      media: [i('21-10-2025_Portfolio_graphisme20.jpg'), i('21-10-2025_Portfolio_graphisme19.jpg'), v('Composition-1_2.mp4', 'Composition-1_2.jpg')],
    },
    {
      id: 'face-a-face-marker', year: '2026', role: 'Direction artistique', colors: [T.encre, T.paille, T.rose],
      en: { title: 'FAF 2026 – 2027', role: 'Art direction', desc: 'For the 2026/2027 campaign of <a href="https://www.faceaface-paris.com/" target="_blank" rel="noopener">FACE A FACE Paris</a>, art direction support for the teams around MARKER, a collection inspired by the gesture of drawing, bold lines and electric colours. A kraft, surreal and dreamlike universe, imagined to highlight the boldness of the frames. Photography and videos by <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.' },
      title: 'FAF 2026 – 2027', sub: 'Face à Face Paris',
      desc: 'Pour la campagne 2026/2027 de <a href="https://www.faceaface-paris.com/" target="_blank" rel="noopener">FACE A FACE Paris</a>, accompagnement des équipes dans la direction artistique autour de MARKER, une collection inspirée par le geste du dessin, les lignes franches et les couleurs électriques. Un univers kraft, surréaliste et onirique, imaginé pour souligner l’audace des montures. Photographies et vidéos réalisées par <a href="https://www.pigmaparis.com/" target="_blank" rel="noopener">PIGMA Paris</a>.',
      tags: ['artdirection', 'campaign', 'eyewear', 'design', 'setdesign', 'branding'],
      media: [i('08-09-2026_002.jpg'), i('08-09-2026_003.jpg'), v('Composition-1.mp4', 'Composition-1.avif'), i('08-09-2026_004.jpg'), i('08-09-2026_006.jpg'), i('08-09-2026_005.jpg')],
    },
    {
      id: 'ripple', year: '2026', role: 'Retail & PLV', colors: [T.lavande, T.creme, T.sky],
      en: { title: 'Ripple', role: 'Retail & POS', desc: 'RIPPLE is a bespoke point-of-sale display system for partner opticians, created in collaboration with <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE Paris</a> for its new optical and sun collection. 3D-printed, the displays echo the graphic codes and colours of the collection to showcase the frames in store.' },
      title: 'Ripple', sub: 'Face à Face Paris',
      desc: 'RIPPLE est un dispositif PLV sur-mesure destiné aux opticiens partenaires, créé en collaboration avec <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE Paris</a> pour sa nouvelle collection optique et solaire. Réalisés en impression 3D, ces présentoirs reprennent les codes graphiques et les couleurs de la collection pour mettre en valeur les montures en point de vente.',
      tags: ['retail', 'PLV', 'eyewear', 'design', '3Dprinting', 'visualmerchandising', 'branding'],
      media: [i('30-04-2026_dossier_002.jpg'), i('B.jpg'), v('FaceAFace_travelling_1600x1132.mp4?v=3', 'FaceAFace_travelling_1600x1132.jpg?v=3'), v('FaceAFace_ondulations_1600x1132.mp4', 'FaceAFace_ondulations_1600x1132.jpg'), i('30-04-2026_dossier_007.jpg'), i('30-04-2026_dossier_005.jpg')],
    },
    {
      id: 'brasserie-le-s', year: '2025', role: 'Hospitality design', colors: [T.brique, T.encre, T.creme],
      en: { title: 'Brasserie le S', role: 'Hospitality design', desc: 'A bespoke tableware collection designed for Brasserie Le S, for <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> in Suresnes. Developed with <a href="https://www.snef.fr/wattdb/" target="_blank" rel="noopener">Watt</a> Design &amp; Build, it extends the architectural universe through sculptural, functional pieces.' },
      title: 'Brasserie le S', sub: 'Servier Monde',
      desc: 'Collection sur mesure d’objets de table conçue pour la Brasserie Le S pour <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> à Suresnes. Développée avec <a href="https://www.snef.fr/wattdb/" target="_blank" rel="noopener">Watt</a> Design &amp; Build, elle prolonge l’univers architectural à travers des pièces sculpturales et fonctionnelles.',
      tags: ['designproduit', 'objetsgraphiques', 'directionartistique', 'impression3D', 'architectureInterieure', 'design&build'],
      media: [i('21-10-2025_Portfolio_graphisme13.jpg'), i('21-10-2025_Portfolio_graphisme15.jpg'), i('10-03-2026_00.jpg'), i('21-10-2025_Portfolio_graphisme14.jpg'), i('21-10-2025_Portfolio_graphisme16.jpg')],
    },
    {
      id: 'surval-4-all', year: '2024', role: 'Office design', colors: [T.creme, T.rose, T.bleu],
      en: { title: 'SURVAL 4\u00A0ALL', role: 'Office design', desc: 'Modular, colourful office products developed for the new premises of <a href="https://servier.com/" target="_blank" rel="noopener">Servier Monde</a> in Suresnes, in collaboration with <a href="https://www.geniedeslieux.com/" target="_blank" rel="noopener">Génies des Lieux</a>, designed for functional and dynamic workspaces.' },
      title: 'SURVAL 4\u00A0ALL', sub: 'Servier Monde',
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
      en: { title: 'DEGREE x PDW 2025', sub: 'Face à Face — 30th anniversary', role: 'Events & Set design', desc: 'A pop, sculptural set design created for the 30th anniversary of <a href="https://www.faceaface-paris.com/fr" target="_blank" rel="noopener">FACE A FACE</a> during Paris Design Week 2025. The project brings design, colour and identity into dialogue to reveal the sculptural potential of sunglasses.' },
      title: 'DEGREE x PDW 2025', sub: 'Face à Face — 30 ans',
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
  if (EN) PROJECTS.forEach(p => { if (p.en) { p.title = p.en.title; p.role = p.en.role; p.desc = p.en.desc; if (p.en.sub) p.sub = p.en.sub; } });

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
  // first (facultatif) : 3 teintes imposées à la première ligne (le rail du premier projet)
  const buildLines = (container, lineW, first) => {
    const cols = Math.ceil(innerWidth / lineW);
    const usage = new Map(PALETTE.map(p => [p.c, 0]));
    const colors = first ? [first.map(c => PALETTE.find(p => p.c === c) || { c, fam: '', l: lum(c) })] : [];
    for (let k = colors.length; k < cols; k++) {
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
  /* ---------- Arrivée du logo ----------
     Le logotype « VALENTIN LEBIGOT » (Montserrat Black, dessiné en tracés vectoriels)
     se contracte : les lettres glissent vers le V et le L en se resserrant, le L rejoint
     le V, puis les deux tracés se transforment exactement en monogramme VL (aucun fondu). */
  const logo = document.querySelector('.head__logo'), logoImg = logo.querySelector('img');
  let wmPlay = () => {};
  if (!reduceMotion) {
    // les 16 signes du logotype : [chasse, tracé] en unités de la police (capitale = 700) ; V et L à part
    const WM = [[746.0,""],[806.0,"M-19 0L287 -700L519 -700L825 0L581 0L534 -122L268 -122L221 0ZM469 -292L401 -468L333 -292Z"],[617.0,"M57 0L57 -700L293 -700L293 -183L609 -183L609 0Z"],[673.0,"M57 0L57 -700L626 -700L626 -522L289 -522L289 -440L585 -440L585 -270L289 -270L289 -178L639 -178L639 0Z"],[804.0,"M57 0L57 -700L251 -700L517 -382L517 -700L747 -700L747 0L553 0L287 -318L287 0Z"],[654.0,"M209 0L209 -517L4 -517L4 -700L650 -700L650 -517L445 -517L445 0Z"],[350.0,"M57 0L57 -700L293 -700L293 0Z"],[804.0,"M57 0L57 -700L251 -700L517 -382L517 -700L747 -700L747 0L553 0L287 -318L287 0Z"],[300.0,""],[617.0,""],[673.0,"M57 0L57 -700L626 -700L626 -522L289 -522L289 -440L585 -440L585 -270L289 -270L289 -178L639 -178L639 0Z"],[773.0,"M57 0L57 -700L431 -700Q576 -700 645 -648.5Q714 -597 714 -517Q714 -464 685 -423Q660 -388 618 -366Q620 -365 623 -364Q682 -341 714.5 -297.5Q747 -254 747 -193Q747 -102 671.5 -51Q596 0 451 0ZM289 -165L431 -165Q470 -165 489.5 -179Q509 -193 509 -220Q509 -247 489.5 -261Q470 -275 431 -275L289 -275ZM289 -431L399 -431Q439 -431 457.5 -444.5Q476 -458 476 -483Q476 -509 457.5 -522Q439 -535 399 -535L289 -535Z"],[350.0,"M57 0L57 -700L293 -700L293 0Z"],[769.0,"M420 16Q335 16 263.5 -10.5Q192 -37 139.5 -86Q87 -135 58 -202Q29 -269 29 -350Q29 -431 58 -498Q87 -565 140 -614Q193 -663 265.5 -689.5Q338 -716 425 -716Q529 -716 610.5 -681Q692 -646 745 -581L594 -448Q561 -486 522.5 -505.5Q484 -525 437 -525Q398 -525 366.5 -513Q335 -501 313 -478Q291 -455 279 -423Q267 -391 267 -350Q267 -311 279 -278.5Q291 -246 313 -223Q335 -200 365.5 -187.5Q396 -175 434 -175Q474 -175 512 -189Q516 -190 520 -192L520 -369L725 -369L725 -73Q661 -30 579 -7Q497 16 420 16Z"],[838.0,"M425 16Q339 16 266.5 -11Q194 -38 141 -87.5Q88 -137 58.5 -204Q29 -271 29 -350Q29 -430 58.5 -496.5Q88 -563 141 -612.5Q194 -662 266.5 -689Q339 -716 424 -716Q510 -716 582 -689Q654 -662 707 -612.5Q760 -563 789.5 -496.5Q819 -430 819 -350Q819 -271 789.5 -204Q760 -137 707 -87.5Q654 -38 582 -11Q510 16 425 16ZM424 -175Q457 -175 485.5 -187Q514 -199 535.5 -221.5Q557 -244 569 -276.5Q581 -309 581 -350Q581 -391 569 -423.5Q557 -456 535.5 -478.5Q514 -501 485.5 -513Q457 -525 424 -525Q391 -525 362.5 -513Q334 -501 312.5 -478.5Q291 -456 279 -423.5Q267 -391 267 -350Q267 -309 279 -276.5Q291 -244 312.5 -221.5Q334 -199 362.5 -187Q391 -175 424 -175Z"],[654.0,"M209 0L209 -517L4 -517L4 -700L650 -700L650 -517L445 -517L445 0Z"]];
    // V et L de Montserrat Black → leur forme exacte dans le monogramme
    const V0 = [[277,0],[-19,-700],[235,-700],[402,-291],[573,-700],[805,-700],[509,0]];
    const V1 = [[293.2,0],[0,-700],[238.2,-700],[414.3,-276.2],[591.6,-700],[828.1,-700],[537.5,0]];
    const L0 = [[57,0],[57,-700],[293,-700],[293,-183],[609,-183],[609,0]];
    const L1 = [[400,0],[591.6,-700],[828.1,-700],[627,-215.6],[1054.6,-215.6],[1054.6,0]];
    const PAD = 30, NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'wm'); svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('viewBox', `${-PAD} ${-700 - PAD} 10500 ${700 + 2 * PAD}`);
    const mk = (tag, attrs = {}) => { const el = document.createElementNS(NS, tag); Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v)); return el; };
    const vPath = mk('path'), lPath = mk('path'), defs = mk('defs');
    svg.appendChild(defs);
    const signs = WM.map(([adv, d], k) => {
      const keep = k === 0 || k === 9, g = (!keep && d) ? mk('path', { d }) : null;
      let rect = null;
      if (g) {
        // chaque lettre est découpée à la largeur de sa place : elles ne se recouvrent jamais
        const cp = mk('clipPath', { id: 'wmc' + k }); rect = mk('rect', { y: -700 - PAD, height: 700 + 2 * PAD });
        cp.appendChild(rect); defs.appendChild(cp);
        const wrap = mk('g', { 'clip-path': `url(#wmc${k})` }); wrap.appendChild(g); svg.appendChild(wrap);
      }
      // ordre de repli : des extrémités vers le V et le L
      return { k, adv, keep, g, rect, rank: k < 9 ? 8 - k : 15 - k };
    });
    svg.append(vPath, lPath);
    logo.classList.add('is-wm'); logo.appendChild(svg);
    const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;   // douce, sans rebond
    const clamp = t => Math.max(0, Math.min(1, t));
    const poly = pts => 'M' + pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L') + 'Z';
    let s0 = 1;
    const layout = () => {
      const h = logoImg.getBoundingClientRect().height || logoImg.offsetWidth * 604 / 912, u = h / 700;
      Object.assign(svg.style, { left: (-PAD * u) + 'px', top: (-PAD * u) + 'px', width: (10500 * u) + 'px', height: ((700 + 2 * PAD) * u) + 'px', transformOrigin: `${PAD * u}px ${PAD * u + h / 2}px` });
      // petit écran : le nom entier tient dans l'en-tête, puis grandit jusqu'à la taille du logo
      const room = getComputedStyle(document.querySelector('.head__burger')).display !== 'none' ? innerWidth - 120 : innerWidth * 0.5;
      s0 = Math.min(1, room / (10428 * u));
    };
    const frame = t => {
      // une seule courbe douce pour toute l'animation : aucun temps d'arrêt entre les étapes
      const T = ease(t);
      // chaque lettre s'efface sur place pendant que sa place se referme ; les suivantes se rapprochent
      let x = 0, lx = 0;
      signs.forEach(S => {
        if (S.k === 9) lx = x;
        if (S.keep) { x += S.adv; return; }
        const p = clamp((T - S.rank * .03) / .45);
        if (S.g) {
          S.g.setAttribute('transform', `translate(${x.toFixed(1)} 0)`);
          S.g.style.opacity = (1 - clamp(p / .6)).toFixed(3);
          S.rect.setAttribute('x', x.toFixed(1)); S.rect.setAttribute('width', Math.max(0, S.adv * (1 - p)).toFixed(1));
        }
        x += S.adv * (1 - p);
      });
      // le V et le L deviennent le monogramme pendant que les dernières lettres se referment
      const m = clamp((T - .5) / .5);
      vPath.setAttribute('d', poly(V0.map((p, i) => [p[0] + (V1[i][0] - p[0]) * m, p[1] + (V1[i][1] - p[1]) * m])));
      lPath.setAttribute('d', poly(L0.map((p, i) => [p[0] + lx + (L1[i][0] - p[0] - lx) * m, p[1] + (L1[i][1] - p[1]) * m])));
      svg.style.transform = `scale(${(s0 + (1 - s0) * T).toFixed(4)})`;
    };
    layout(); frame(0);
    wmPlay = () => setTimeout(() => {
      layout();
      const D = 1700, t0 = performance.now();
      const step = now => {
        const t = clamp((now - t0) / D);
        frame(t);
        if (t < 1) requestAnimationFrame(step);
        else { logo.classList.remove('is-wm'); svg.remove(); }   // même forme, au pixel : le logo prend la place sans saut
      };
      requestAnimationFrame(step);
    }, 1300);   // le temps de lire VALENTIN LEBIGOT après les lignes
  }
  const start = () => { body.classList.remove('is-loading'); hero.classList.add('in'); wmPlay(); };
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
  // téléphone : l'intro se termine par les mêmes petites lignes que le pied de page
  const heroLines = document.getElementById('heroLines');
  let heroCols = [];
  const buildHero = () => {
    heroCols = buildLines(heroLines, railW());
    heroCols.forEach((c, k) => {
      c.style.transitionDelay = (0.15 + rand(0, .45)).toFixed(2) + 's';
      c.style.setProperty('--amp', rand(10, 34).toFixed(0) + 'px');
      c.style.setProperty('--dur', rand(2.4, 4.6).toFixed(2) + 's');
      c.style.setProperty('--dl', (-rand(0, 4.6)).toFixed(2) + 's');
      c._v = rand(0.8, 1.5);   // vitesse à laquelle la ligne redescend au défilement
    });
    heroScroll();
  };
  // au défilement, le texte s'efface et toutes les lignes redescendent chacune à sa vitesse ;
  // le rail du premier projet prend ensuite le relais
  const phone = matchMedia('(max-width: 900px)');
  const heroText = document.querySelector('#hero .hero__text');
  let heroTick = false;
  const heroScroll = () => {
    heroTick = false;
    const y = phone.matches && !reduceMotion ? Math.min(scrollY, innerHeight) : 0;
    heroText.style.transform = y ? `translateY(${(y * 0.4).toFixed(1)}px)` : '';
    heroText.style.opacity = y ? Math.max(0, 1 - y / (innerHeight * 0.5)).toFixed(3) : '';
    heroCols.forEach(c => (c.style.top = y ? (y * c._v).toFixed(1) + 'px' : ''));
  };
  addEventListener('scroll', () => { if (!heroTick) { heroTick = true; requestAnimationFrame(heroScroll); } }, { passive: true });
  buildFoot();
  buildHero();
  let lastW = innerWidth;
  addEventListener('resize', () => {
    clearTimeout(buildFoot.t);
    buildFoot.t = setTimeout(() => { if (Math.abs(innerWidth - lastW) > 40) { lastW = innerWidth; buildFoot(); buildHero(); } }, 250);
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
  // chargement anticipé : la vidéo est prête avant d'entrer à l'écran, pas de flash au scroll
  const vidPre = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.preload = 'auto'; vidPre.unobserve(e.target); }
  }), { rootMargin: '100% 0px' });
  document.querySelectorAll('video').forEach(v => { vidObs.observe(v); vidPre.observe(v); });

  /* ---------- 7b. Protection des images et vidéos ----------
     Dissuasif : pas de clic droit, de glisser-déposer ni d'appui long sur les visuels,
     pas d'option de téléchargement ni d'image dans l'image sur les vidéos.        */
  const isMedia = t => t instanceof Element && t.closest('img, video, .shot, .band, .about__photo');
  ['contextmenu', 'dragstart'].forEach(ev => document.addEventListener(ev, e => { if (isMedia(e.target)) e.preventDefault(); }));
  document.querySelectorAll('video').forEach(v => {
    v.setAttribute('controlslist', 'nodownload noremoteplayback noplaybackrate');
    v.setAttribute('disablepictureinpicture', '');
    v.setAttribute('disableremoteplayback', '');
  });
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));

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

  /* ---------- 8c. Mobile : accordéon « Projets » du menu ☰ ----------
     Dans le menu, « Projets » se déplie comme les accordéons de la page (+ / −)
     et liste les 9 projets : ligne tricolore, numéro, titre ; un nom mène au projet. */
  const navAccLink = document.querySelector('#nav a[data-nav="projets"]');
  navAccLink.insertAdjacentHTML('beforeend', '<i class="navacc__pm" aria-hidden="true"></i>');
  const navAcc = document.createElement('div');
  navAcc.className = 'navacc';
  navAcc.innerHTML = `<div><ol>${PROJECTS.map((p, k) => `
    <li><a href="#${p.id}"><span class="navacc__bar">${p.colors.map(c => `<i style="background:${c}"></i>`).join('')}</span>
      <span class="navacc__label"><em>${pad2(k + 1)}</em>${esc(p.title)}</span></a></li>`).join('')}</ol></div>`;
  navAccLink.after(navAcc);
  const navAccSet = on => { navAcc.classList.toggle('open', on); navAccLink.classList.toggle('acc-open', on); };
  // sous le doigt, les lignes s'allongent en vague (comme dans l'ancien sommaire)
  const accBars = [...navAcc.querySelectorAll('.navacc__bar')];
  const accW = accBars.map(() => 12);
  let accY = null, accRaf = 0;
  const accTick = () => {
    accRaf = 0;
    let moving = false;
    accBars.forEach((b, k) => {
      const r = b.getBoundingClientRect(), d = accY === null ? 1e9 : (r.top + r.height / 2) - accY;
      const goal = 12 + (accY === null ? 0 : 26 * Math.exp(-(d * d) / (2 * 45 * 45)));
      const next = accW[k] + (goal - accW[k]) * 0.2;
      if (Math.abs(next - accW[k]) > 0.1) moving = true;
      accW[k] = next; b.style.width = next.toFixed(1) + 'px';
    });
    if (moving) accRaf = requestAnimationFrame(accTick);
  };
  const accWave = y => { accY = y; if (!accRaf) accRaf = requestAnimationFrame(accTick); };
  navAcc.addEventListener('pointerdown', e => accWave(e.clientY));
  navAcc.addEventListener('pointermove', e => accWave(e.clientY));
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => navAcc.addEventListener(t, () => accWave(null)));

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
  // Le menu mobile (Projets, À propos, Contact) : la croix de l'en-tête et le bouton retour du téléphone le ferment.
  let panel = null, afterClose = null;
  const showPanel = (name, on) => {
    if (name === 'menu') nav.classList.toggle('open', on);
  };
  const openPanel = name => {
    if (panel === name) return;
    if (panel) showPanel(panel, false);
    else history.pushState({ panel: 1 }, '');
    panel = name;
    showPanel(name, true);
    burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', L('Fermer', 'Close'));
    body.classList.add('menu-open');
  };
  const closePanel = then => {
    if (!panel) { then && then(); return; }
    showPanel(panel, false);
    panel = null;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Menu');
    body.classList.remove('menu-open');
    setTimeout(() => navAccSet(false), 400);   // l'accordéon se replie une fois le menu fermé
    if (history.state && history.state.panel) { afterClose = then || null; history.back(); }
    else if (then) then();
  };
  addEventListener('popstate', () => {
    if (panel) closePanel();                       // retour du téléphone : ferme le panneau ouvert
    if (afterClose) { const f = afterClose; afterClose = null; setTimeout(f, 30); }
  });
  burger.addEventListener('click', () => (panel ? closePanel() : openPanel('menu')));
  addEventListener('keydown', e => { if (e.key === 'Escape' && panel) closePanel(); });
  const goTo = (target, hash) => closePanel(() => {
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', hash);
  });
  // clic dans le menu : « Projets » déplie / replie la liste des projets, les autres liens mènent à leur section
  nav.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || !nav.classList.contains('open')) return;
    e.preventDefault();
    if (a === navAccLink) { navAccSet(!navAcc.classList.contains('open')); return; }
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
