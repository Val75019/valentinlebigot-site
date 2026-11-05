/* =========================================================
   Valentin Lebigot — V2
   ========================================================= */
(() => {
  const AUTOPLAY_MS = 4500;         // durée d'une image
  const root = document.documentElement;
  const body = document.body;
  const isTouch = matchMedia('(hover: none)').matches;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const projects = [...document.querySelectorAll('.project')];
  const about = document.getElementById('a-propos');
  const sections = [...projects, about];

  /* ---------- Intro : 16 bandes colorées ----------
     16 bandes verticales (9 sur mobile), chacune découpée en 1 à 3
     sections. Les tailles et les teintes bougent en décalé d'une bande
     à l'autre (même ressort que la barre latérale), puis les bandes
     remontent et disparaissent en décalé.                             */
  const intro = document.getElementById('intro');
  if (intro && !reduceMotion) {
    const PALETTE = ['#1f5199', '#e5472b', '#fdf4bb', '#2d3a24', '#bacfec', '#c4a8f8', '#f7f7f7', '#78271f'];
    const COLS = innerWidth < 700 ? 9 : 16;
    const STAGGER = 0.035;        // décalage entre bandes (s)
    const STEPS = 3;              // nombre de recompositions avant la sortie
    const STEP_MS = 650;

    const pick = (avoid) => { let c; do { c = PALETTE[Math.floor(Math.random() * PALETTE.length)]; } while (c === avoid); return c; };
    const cols = [...Array(COLS)].map((_, k) => {
      const col = document.createElement('div');
      col.className = 'intro__col';
      col.innerHTML = '<span class="intro__seg"></span>'.repeat(3);
      [...col.children].forEach(seg => (seg.style.transitionDelay = `${k * STAGGER}s`));
      intro.appendChild(col);
      return col;
    });

    // recompose chaque bande : 1 à 3 sections, tailles et teintes au hasard
    const shuffle = () => cols.forEach(col => {
      const n = 1 + Math.floor(Math.random() * 3);
      let prev = null;
      [...col.children].forEach((seg, j) => {
        // valeurs ×10 : le rebond ne peut jamais laisser de vide dans la bande
        seg.style.flexGrow = j < n ? (6 + Math.random() * 24).toFixed(1) : 0;
        prev = pick(prev);
        seg.style.backgroundColor = prev;
      });
    });

    // état de départ sans transition
    intro.querySelectorAll('.intro__seg').forEach(el => (el.style.transition = 'none'));
    shuffle();
    void intro.offsetWidth;
    intro.querySelectorAll('.intro__seg').forEach(el => (el.style.transition = ''));

    for (let i = 0; i < STEPS; i++) setTimeout(shuffle, 250 + i * STEP_MS);

    // les bandes remontent en décalé
    const outAt = 250 + STEPS * STEP_MS + 200;
    setTimeout(() => {
      cols.forEach((c, k) => (c.style.transitionDelay = `${k * STAGGER}s`));
      intro.classList.add('is-out');
    }, outAt);
    setTimeout(() => { intro.remove(); body.classList.remove('is-loading'); }, outAt + 1000 + COLS * STAGGER * 1000 + 100);
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
  document.querySelector('.counter__total').textContent = String(projects.length).padStart(2, '0');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const navLinks = [...document.querySelectorAll('[data-nav]')];

  /* ---------- Section active : couleurs + index ---------- */
  const roll = document.querySelector('.counter__roll');
  const mobileCurrent = document.getElementById('mobileCurrent');
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

    // Titre mobile
    mobileCurrent.classList.add('is-swap');
    setTimeout(() => {
      mobileCurrent.textContent = section.dataset.label;
      mobileCurrent.classList.remove('is-swap');
    }, 250);

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
      this.index = 0;
      this.visible = false;
      this.timer = null;
      this.build();
      this.bind();
    }

    build() {
      this.slides = this.items.map((item, i) => {
        const s = document.createElement('div');
        s.className = 'slide';
        if (typeof item === 'object' && item.video) {
          s.innerHTML = `<video muted playsinline loop preload="${i === 0 ? 'auto' : 'none'}" poster="${item.poster}"><source src="${item.video}" type="video/mp4"></video>`;
        } else {
          s.innerHTML = `<img src="${item}" alt="" ${i === 0 ? '' : 'loading="lazy"'} decoding="async" draggable="false">`;
        }
        this.el.appendChild(s);
        return s;
      });

      const bars = document.createElement('div');
      bars.className = 'gallery__bars';
      bars.innerHTML = this.items.map(() => '<span><i></i></span>').join('');
      this.el.appendChild(bars);
      this.bars = [...bars.children];
      bars.style.setProperty('--dur', AUTOPLAY_MS + 'ms');

      this.count = document.createElement('div');
      this.count.className = 'gallery__count';
      this.el.appendChild(this.count);

      this.show(0, true);
    }

    show(i, instant = false) {
      const n = this.slides.length;
      const prev = this.slides[this.index];
      this.index = (i + n) % n;
      const next = this.slides[this.index];

      if (prev !== next) {
        prev.classList.remove('is-active');
        prev.classList.add('is-leaving');
        setTimeout(() => prev.classList.remove('is-leaving'), 900);
        prev.querySelector('video')?.pause();
      }
      next.classList.add('is-active');

      // précharge l'image suivante
      const after = this.slides[(this.index + 1) % n].querySelector('img');
      if (after) after.loading = 'eager';

      this.bars.forEach((b, k) => {
        b.classList.toggle('is-done', k < this.index);
        b.classList.remove('is-active');
      });
      void this.bars[this.index].offsetWidth;
      if (this.visible || instant) this.bars[this.index].classList.add('is-active');

      this.count.textContent = `${String(this.index + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
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
      this.el.classList.toggle('is-paused', !v);
      if (v) {
        this.bars[this.index].classList.remove('is-active');
        void this.bars[this.index].offsetWidth;
        this.bars[this.index].classList.add('is-active');
        this.playVideo();
        this.schedule();
      } else {
        clearTimeout(this.timer);
        this.slides[this.index].querySelector('video')?.pause();
      }
    }

    bind() {
      // Clic : moitié gauche = précédent, moitié droite = suivant
      this.el.addEventListener('click', e => {
        const r = this.el.getBoundingClientRect();
        const left = e.clientX - r.left < r.width * 0.33;
        this.show(this.index + (left ? -1 : 1));
      });

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

      // Curseur personnalisé
      if (!isTouch) {
        this.el.addEventListener('mousemove', e => {
          const r = this.el.getBoundingClientRect();
          this.el.classList.toggle('is-prev', e.clientX - r.left < r.width * 0.33);
        });
      }
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
