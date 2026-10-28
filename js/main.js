(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var header = document.querySelector('[data-header]');
  var hero = document.querySelector('[data-hero]');
  var layer = document.querySelector('[data-parallax]');

  /* Header: transparente sobre el hero, sólido al salir */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (header) header.classList.toggle('is-scrolled', y > 24);
      if (layer && hero && !reduce.matches) {
        var limit = window.innerHeight * 0.1;
        var shift = Math.min(y * 0.3, limit);
        layer.style.transform = 'translate3d(0,' + shift.toFixed(1) + 'px,0)';
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Aparición al hacer scroll (una sola vez, sin parpadeo al saltar entre secciones) */
  if ('IntersectionObserver' in window) {
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        reveal.unobserve(entry.target);
      });
    }, { threshold: 0 });
    document.querySelectorAll('[data-reveal]').forEach(function (node) { reveal.observe(node); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (node) { node.classList.add('is-revealed'); });
  }

  /* Navegación interna: desplazamiento animado compensando la cabecera fija.
     Se anima con requestAnimationFrame (no depende del soporte del navegador). */
  var headerHeight = header ? header.offsetHeight : 0;
  var animId = null;
  var root = document.documentElement;

  function stopScroll() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    root.style.scrollBehavior = '';
  }

  function animateTo(targetY) {
    stopScroll();
    var startY = window.pageYOffset;
    var distance = targetY - startY;
    if (Math.abs(distance) < 2) {
      window.scrollTo(0, targetY);
      return;
    }
    var duration = Math.min(900, Math.max(450, Math.abs(distance) * 0.35));
    var start = null;

    root.style.scrollBehavior = 'auto';

    function step(now) {
      if (start === null) start = now;
      var p = Math.min(1, (now - start) / duration);
      var eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      window.scrollTo(0, Math.round(startY + distance * eased));
      if (p < 1) {
        animId = requestAnimationFrame(step);
      } else {
        animId = null;
        root.style.scrollBehavior = '';
      }
    }
    animId = requestAnimationFrame(step);
  }

  function scrollToTarget(target) {
    var top = target.getBoundingClientRect().top + window.pageYOffset;
    if (target.id !== 'hero') top -= headerHeight;
    animateTo(Math.max(0, Math.round(top)));
  }

  /* Cualquier gesto del usuario cancela la animación */
  ['wheel', 'touchstart', 'keydown'].forEach(function (name) {
    window.addEventListener(name, stopScroll, { passive: true });
  });

  /* Volver arriba: visible fuera del hero */
  var toTop = document.querySelector('[data-to-top]');
  if (toTop) {
    toTop.addEventListener('click', function () { animateTo(0); });
    if ('IntersectionObserver' in window && hero) {
      new IntersectionObserver(function (entries) {
        toTop.classList.toggle('is-visible', !entries[0].isIntersecting);
      }, { threshold: 0 }).observe(hero);
    } else {
      toTop.classList.add('is-visible');
    }
  }

  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
    var node = event.target;
    var link = node && node.closest ? node.closest('a[href^="#"]') : null;
    if (!link || link.classList.contains('skip-link')) return;
    var hash = link.getAttribute('href');
    if (!hash || hash === '#') return;
    var target = document.getElementById(hash.slice(1));
    if (!target) return;
    event.preventDefault();
    scrollToTarget(target);
    if (history.replaceState) history.replaceState(null, '', hash);
  });

  /* Enlace activo en la nav */
  var links = {};
  document.querySelectorAll('.nav a[href^="#"]').forEach(function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });
  if ('IntersectionObserver' in window && Object.keys(links).length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(links).forEach(function (id) {
          var active = id === entry.target.id;
          links[id].classList.toggle('is-active', active);
          if (active) links[id].setAttribute('aria-current', 'true');
          else links[id].removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (section) { spy.observe(section); });
  }

  /* Menú móvil */
  var toggle = document.querySelector('[data-nav-toggle]');
  var panel = document.querySelector('[data-nav-panel]');

  function setNav(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    panel.classList.toggle('is-open', open);
    panel.inert = !open;
    panel.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('nav-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      var first = panel.querySelector('a');
      if (first) first.focus({ preventScroll: true });
    }
  }

  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    panel.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNav(false);
      else if (event.target === panel) setNav(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });

    panel.addEventListener('keydown', function (event) {
      if (event.key !== 'Tab') return;
      var items = Array.prototype.filter.call(
        panel.querySelectorAll('a[href], button:not([disabled])'),
        function (node) { return node.offsetParent !== null; }
      );
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', function (event) {
      if (event.matches) setNav(false);
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
