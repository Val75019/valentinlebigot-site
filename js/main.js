/* =========================================================
   Valentin Lebigot — V2
   ========================================================= */
(() => {
  const AUTOPLAY_MS = 4500;         // durée d'une image
  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const projects = [...document.querySelectorAll('.project')];
  const about = document.getElementById('a-propos');
  const sections = [...projects, about];

  /* ---------- Intro : lignes fines ----------
     Des lignes verticales aussi fines que la barre latérale, chacune en
     3 sections. Les couleurs ne changent pas : seules les sections montent
     et descendent, chaque ligne à son rythme (moments, durées et amplitudes
     au hasard). Puis les lignes remontent et disparaissent en décalé.

     Couleurs réparties intelligemment, une seule fois au départ :
     - une section n'a jamais la même famille de couleur (bleu/bleu clair,
       rouge/terracotta, crème/blanc…) que la section au-dessus d'elle, ni
       qu'AUCUNE section de la ligne de gauche : la règle reste donc vraie
       quelle que soit la hauteur des sections pendant le mouvement ;
     - on privilégie les contrastes (clair à côté de foncé) ;
     - les couleurs les moins utilisées sont favorisées (équilibre).      */
  const intro = document.getElementById('intro');
  if (intro && !reduceMotion) {
    const PALETTE = [
      { c: '#0050a0', fam: 'bleu' },
      { c: '#b7d0ef', fam: 'bleu' },
      { c: '#f53216', fam: 'rouge' },
      { c: '#82201c', fam: 'rouge' },
      { c: '#fdf3b0', fam: 'clair' },
      { c: '#f6f6f6', fam: 'clair' },
      { c: '#c9a6fb', fam: 'lavande' },
      { c: '#2b3a25', fam: 'vert' },
    ];
    // paires trop proches à l'œil, à éviter si possible
    const TOO_CLOSE = [['#b7d0ef', '#c9a6fb'], ['#82201c', '#2b3a25']];

    const lum = hex => {
      const v = [1, 3, 5].map(i => parseInt(hex.substr(i, 2), 16) / 255)
        .map(x => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
      return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
    };
    PALETTE.forEach(p => (p.l = lum(p.c)));
    // pénalité de voisinage : même famille = à proscrire, paire trop proche = à éviter
    const clash = (a, b) => (a.fam === b.fam ? 10 : 0) +
      (TOO_CLOSE.some(([x, y]) => (a.c === x && b.c === y) || (a.c === y && b.c === x)) ? 1 : 0);

    const LINE_W = innerWidth < 900 ? 10 : 12;   // largeur d'une ligne (px)
    const COLS = Math.ceil(innerWidth / LINE_W);
    const MOVE_UNTIL = 1400;                       // les sections bougent jusqu'à… (ms)
    const rand = (a, b) => a + Math.random() * (b - a);

    // 1. couleurs (une fois pour toutes)
    const usage = new Map(PALETTE.map(p => [p.c, 0]));
    const colors = [];
    for (let k = 0; k < COLS; k++) {
      const col = [];
      for (let j = 0; j < 3; j++) {
        const neigh = [...(k > 0 ? colors[k - 1] : []), ...(j > 0 ? [col[j - 1]] : [])];
        const pen = PALETTE.map(p => neigh.reduce((t, n) => t + clash(p, n), 0));
        const minPen = Math.min(...pen);
        let best = null, bestScore = -Infinity;
        PALETTE.forEach((p, i) => {
          if (pen[i] > minPen) return;
          const contrast = neigh.length ? Math.min(...neigh.map(n => Math.abs(p.l - n.l))) : 0.5;
          const score = contrast * 1.2 - usage.get(p.c) / COLS * 3 + Math.random() * 0.35;
          if (score > bestScore) { bestScore = score; best = p; }
        });
        col.push(best);
        usage.set(best.c, usage.get(best.c) + 1);
      }
      colors.push(col);
    }

    // 2. lignes
    const cols = colors.map(col => {
      const el = document.createElement('div');
      el.className = 'intro__col';
      el.style.width = LINE_W + 'px';
      el.innerHTML = col.map(p => `<span class="intro__seg" style="background:${p.c}"></span>`).join('');
      intro.appendChild(el);
      return el;
    });

    // tailles au hasard (valeurs ×10 : le rebond ne laisse jamais de vide)
    const resize = (col, instant) => [...col.children].forEach(seg => {
      if (!instant) {
        // chaque section a sa propre durée : les mouvements ne sont jamais synchronisés
        seg.style.transitionDuration = rand(0.6, 1.2).toFixed(2) + 's';
      }
      seg.style.flexGrow = rand(6, 30).toFixed(1);
    });

    intro.querySelectorAll('.intro__seg').forEach(el => (el.style.transition = 'none'));
    cols.forEach(c => resize(c, true));
    void intro.offsetWidth;
    intro.querySelectorAll('.intro__seg').forEach(el => (el.style.transition = ''));

    // 3. chaque ligne bouge 2 à 4 fois, à des moments qui lui sont propres
    cols.forEach(col => {
      const moves = 1 + Math.floor(Math.random() * 3);
      for (let m = 0; m < moves; m++) setTimeout(() => resize(col), rand(80, MOVE_UNTIL));
    });

    // 4. sortie : les lignes remontent, en décalé et un peu au hasard
    const OUT_AT = MOVE_UNTIL + 150;
    const OUT_SPREAD = 0.5;   // étalement des départs (s)
    setTimeout(() => {
      cols.forEach((c, k) => {
        c.style.transitionDelay = (k / COLS * OUT_SPREAD * 0.5 + Math.random() * OUT_SPREAD * 0.5).toFixed(3) + 's';
        c.style.transform = 'translateY(-100%)';
      });
    }, OUT_AT);
    setTimeout(() => { intro.remove(); body.classList.remove('is-loading'); }, OUT_AT + (OUT_SPREAD + 0.85) * 1000 + 100);
  } else {
    intro?.remove();
    body.classList.remove('is-loading');
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Projets ---------- */
  projects.forEach((p, i) => {
    p.dataset.label = p.querySelector('.project__title').textContent.trim();
    p.dataset.sub = p.querySelector('.project__sub')?.textContent.trim() || '';
    p.dataset.index = i;
  });
  const stepPrev = document.querySelector('.counter__prev');
  const stepNext = document.querySelector('.counter__next');
  const sepPrev = document.querySelector('.counter__sep--prev');
  const sepNext = document.querySelector('.counter__sep--next');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const navLinks = [...document.querySelectorAll('[data-nav]')];

  /* ---------- Section active : couleurs + index ---------- */
  const roll = document.querySelector('.counter__roll');
  let current = null;

  function setActive(section) {
    if (section === current) return;
    const prevIndex = current ? sections.indexOf(current) : -1;
    const nextIndex = sections.indexOf(section);
    current = section;

    // Couleurs des barres
    const [c1, c2, c3] = section.dataset.colors.split(',').map(s => s.trim());
    root.style.setProperty('--c1', c1);
    root.style.setProperty('--c2', c2);
    root.style.setProperty('--c3', c3);

    // Légère variation des proportions des barres pour plus de mouvement
    const segs = document.querySelectorAll('.colorbar__seg');
    // Proportions des 3 barres : très contrastées d'un projet à l'autre.
    // Personnalisable par projet avec data-flex="4,1,2".
    const patterns = [[4, 1, 1.6], [1, 3.6, 1], [1.4, .8, 4], [3, 2.2, .6], [.7, 1.6, 3.6], [3.8, .6, 1.8], [1, 4, 2], [2.6, .8, 1], [1.2, 2.8, 3], [1, 1, 1]];
    const pat = section.dataset.flex
      ? section.dataset.flex.split(',').map(Number)
      : section === about ? [1, 1, 1] : patterns[nextIndex % patterns.length];
    segs.forEach((s, i) => (s.style.flexGrow = pat[i]));

    // Index
    const isProject = projects.includes(section);
    navLinks.forEach(a => a.classList.toggle('is-active', a.dataset.nav === (isProject ? 'projets' : 'a-propos')));

    // Compteur roulant (masqué sur À propos)
    document.querySelector('.sidebar__counter').classList.toggle('is-hidden', !isProject);
    if (isProject) {
      roll.textContent = String(nextIndex + 1).padStart(2, '0');
      roll.classList.remove('is-up', 'is-down');
      void roll.offsetWidth;
      roll.classList.add(nextIndex > prevIndex ? 'is-up' : 'is-down');
    }

    // Frise : numéros du projet précédent et suivant (gris, cliquables)
    if (isProject) {
      const setStep = (el, sep, p) => {
        const on = !!p;
        el.classList.toggle('is-off', !on);
        sep.classList.toggle('is-off', !on);
        el.tabIndex = on ? 0 : -1;
        if (!on) return;
        el.textContent = String(projects.indexOf(p) + 1).padStart(2, '0');
        el.href = '#' + p.id;
        el.title = p.dataset.label;
      };
      setStep(stepPrev, sepPrev, projects[nextIndex - 1]);
      setStep(stepNext, sepNext, projects[nextIndex + 1]);
    }

    // Titre du projet dans la barre latérale
    sidebarTitle.classList.add('is-swap');
    setTimeout(() => {
      sidebarTitle.innerHTML = isProject ? `${section.dataset.label}<em>${section.dataset.sub}</em>` : section.dataset.label;
      sidebarTitle.classList.remove('is-swap');
    }, 300);
  }

  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && setActive(e.target));
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => activeObserver.observe(s));
  setActive(sections[0]);

  /* ---------- Apparitions au scroll ---------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        // la galerie est masquée par clip-path : on observe son article parent
        const target = e.target.classList.contains('project') ? e.target.querySelector('.gallery') : e.target;
        target.classList.add('is-in');
        revealObserver.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
  document.querySelectorAll('.project, .project__info, .reveal').forEach(el => revealObserver.observe(el));

  /* ---------- Galeries ---------- */
  class Gallery {
    constructor(el) {
      this.el = el;
      this.items = JSON.parse(el.dataset.media);
      // texte alternatif (lu par Google et les lecteurs d'écran) : titre + sous-titre du projet
      const proj = el.closest('.project');
      this.alt = proj ? `${proj.querySelector('.project__title').textContent.trim()}, ${proj.querySelector('.project__sub')?.textContent.trim() || ''}`.replace(/"/g, '') : '';
      this.index = 0;
      this.visible = false;
      this.timer = null;
      this.build();
      this.bind();
    }

    build() {
      // rail horizontal : toutes les images côte à côte, chacune pleine largeur.
      // .gallery__shift porte le petit décalage au survol, .gallery__track le défilement.
      this.shift = document.createElement('div');
      this.shift.className = 'gallery__shift';
      this.track = document.createElement('div');
      this.track.className = 'gallery__track';
      this.shift.appendChild(this.track);
      this.el.appendChild(this.shift);

      this.slides = this.items.map((item, i) => {
        const s = document.createElement('div');
        s.className = 'slide';
        if (typeof item === 'object' && item.video) {
          s.innerHTML = `<video muted playsinline loop preload="${i === 0 ? 'auto' : 'none'}" poster="${item.poster}"><source src="${item.video}" type="video/mp4"></video>`;
        } else {
          s.innerHTML = `<img src="${item}" alt="${this.alt} — image ${i + 1} sur ${this.items.length}" ${i < 2 ? '' : 'loading="lazy"'} decoding="async" draggable="false">`;
        }
        this.track.appendChild(s);
        return s;
      });

      // copies aux deux bouts : la boucle continue sans retour en arrière visible,
      // et l'image « précédente » existe aussi à gauche de la première
      this.offset = 0;
      if (this.slides.length > 1) {
        const mk = src => {
          const c = src.cloneNode(true);
          c.setAttribute('aria-hidden', 'true');
          c.querySelector('img')?.setAttribute('alt', '');
          c.querySelector('img')?.removeAttribute('loading');
          return c;
        };
        this.track.appendChild(mk(this.slides[0]));
        this.track.insertBefore(mk(this.slides[this.slides.length - 1]), this.track.firstChild);
        this.offset = 1;
      }

      this.pos = 0;   // position (de -1 à n : -1 et n sont les copies)
      this.place(0, false);
      this.show(0, true);
      addEventListener('resize', () => this.place(this.pos, false));
    }

    // déplace le rail sur la position p
    place(p, animate = true) {
      const step = this.el.getBoundingClientRect().width;
      this.track.classList.toggle('no-anim', !animate);
      this.track.style.transform = `translateX(${-(p + this.offset) * step}px)`;
      if (!animate) void this.track.offsetWidth;
      this.pos = p;
    }

    show(i, instant = false) {
      const n = this.slides.length;
      const prevSlide = this.slides[this.index];

      if (!instant && n > 1) {
        clearTimeout(this.snap);
        // si on était resté sur une copie (clic rapide), on se replace d'abord
        if (this.pos >= n) this.place(this.pos - n, false), i = this.index + (i > this.index ? 1 : -1);
        else if (this.pos < 0) this.place(this.pos + n, false), i = this.index + (i > this.index ? 1 : -1);

        const target = i;   // peut valoir -1 ou n : on glisse vers la copie…
        requestAnimationFrame(() => this.place(target, true));
        if (target >= n || target < 0) {
          // …puis on se replace sur la vraie image, sans animation
          this.snap = setTimeout(() => this.place((target + n) % n, false), 1100);
        }
      }

      this.index = (i + n) % n;
      if (prevSlide !== this.slides[this.index]) prevSlide.querySelector('video')?.pause();

      // précharge les images voisines
      [1, 2, -1].forEach(d => {
        const img = this.slides[(this.index + d + n) % n]?.querySelector('img');
        if (img) img.loading = 'eager';
      });

      this.playVideo();
      this.schedule();
    }

    playVideo() {
      const v = this.slides[this.index].querySelector('video');
      if (v && this.visible) {
        v.preload = 'auto';
        v.play().catch(() => {});
      }
    }

    schedule() {
      clearTimeout(this.timer);
      if (!this.visible || this.slides.length < 2 || reduceMotion) return;
      this.timer = setTimeout(() => this.show(this.index + 1), AUTOPLAY_MS);
    }

    setVisible(v) {
      this.visible = v;
      if (v) {
        this.playVideo();
        this.schedule();
      } else {
        clearTimeout(this.timer);
        this.slides[this.index].querySelector('video')?.pause();
      }
    }

    bind() {
      // Clic : moitié gauche = précédent, moitié droite = suivant
      const isLeft = e => e.clientX - this.el.getBoundingClientRect().left < this.el.clientWidth / 2;
      this.el.addEventListener('click', e => this.show(this.index + (isLeft(e) ? -1 : 1)));

      // Survol : l'image suivante (à droite) ou précédente (à gauche) dépasse légèrement
      if (matchMedia('(hover: hover)').matches) {
        this.el.addEventListener('mousemove', e => {
          const side = isLeft(e) ? 'prev' : 'next';
          if (side !== this.peek) {
            this.peek = side;
            this.el.classList.toggle('peek-prev', side === 'prev');
            this.el.classList.toggle('peek-next', side === 'next');
          }
        });
        this.el.addEventListener('mouseleave', () => {
          this.peek = null;
          this.el.classList.remove('peek-prev', 'peek-next');
        });
      }

      // Swipe mobile
      let x0 = null, y0 = null;
      this.el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
      this.el.addEventListener('touchend', e => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        const dy = e.changedTouches[0].clientY - y0;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          e.preventDefault();
          this.show(this.index + (dx < 0 ? 1 : -1));
        }
        x0 = null;
      });

    }
  }

  const galleries = [...document.querySelectorAll('.gallery')].map(el => new Gallery(el));

  const playObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const g = galleries.find(g => g.el === e.target);
      g && g.setVisible(e.isIntersecting);
    });
  }, { threshold: 0.45 });
  galleries.forEach(g => playObserver.observe(g.el));

  // Clavier : flèches = galerie du projet actif
  addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const g = galleries.find(g => g.el.closest('.project') === current);
    if (g) g.show(g.index + (e.key === 'ArrowRight' ? 1 : -1));
  });

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById('burger');
  burger.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.sidebar a[href^="#"]').forEach(a =>
    a.addEventListener('click', () => {
      body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', false);
    })
  );

  /* ---------- Accordéons animés ---------- */
  document.querySelectorAll('.accordion details').forEach(d => {
    const summary = d.querySelector('summary');
    summary.addEventListener('click', e => {
      e.preventDefault();
      if (d.open) {
        d.classList.remove('is-open');
        setTimeout(() => (d.open = false), 450);
      } else {
        d.open = true;
        requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add('is-open')));
      }
    });
  });
})();
