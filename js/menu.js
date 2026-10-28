(function () {
  var grid = document.querySelector('[data-menu-grid]');
  if (!grid || typeof menuData === 'undefined') return;

  var filters = document.querySelector('[data-menu-filters]');
  var counter = document.querySelector('[data-menu-count]');
  var KEY = 'oishiku:categoria';
  var current = 'todas';

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function glyph() {
    var span = el('span', 'card__glyph', '食');
    span.setAttribute('aria-hidden', 'true');
    return span;
  }

  function media(plato) {
    var box = el('div', 'card__media');
    if (!plato.imagen) {
      box.classList.add('card__media--empty');
      box.append(glyph());
      return box;
    }
    var img = document.createElement('img');
    img.src = 'images/platos/' + plato.imagen;
    img.alt = plato.nombre;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 600;
    img.height = 400;
    img.addEventListener('error', function () {
      img.remove();
      box.classList.add('card__media--empty');
      box.append(glyph());
    }, { once: true });
    box.append(img);
    return box;
  }

  function card(plato) {
    var article = el('article', 'card');
    if (plato.disponible === false) article.classList.add('card--off');

    var body = el('div', 'card__body');
    body.append(el('h3', 'card__title', plato.nombre));
    if (plato.descripcion) body.append(el('p', 'card__desc', plato.descripcion));

    var badges = el('ul', 'card__badges');
    if (plato.vegetariano) badges.append(el('li', 'badge', 'Vegetariano'));
    if (plato.vegano) badges.append(el('li', 'badge', 'Vegano'));
    if (plato.disponible === false) badges.append(el('li', 'badge badge--off', 'No disponible'));
    if (badges.children.length) body.append(badges);

    body.append(el('p', 'card__price', '$' + plato.precio.toFixed(2)));
    article.append(media(plato), body);
    return article;
  }

  function platos(categoria) {
    if (categoria === 'todas') {
      return menuData.categorias.reduce(function (all, cat) { return all.concat(cat.platos); }, []);
    }
    var found = menuData.categorias.find(function (cat) { return cat.id === categoria; });
    return found ? found.platos : [];
  }

  function render(categoria) {
    var list = platos(categoria);
    grid.replaceChildren.apply(grid, list.map(card));
    if (counter) counter.textContent = list.length + (list.length === 1 ? ' plato' : ' platos');
    grid.classList.remove('is-fading');
    void grid.offsetWidth;
    grid.classList.add('is-fading');
  }

  function setActive(categoria, scroll) {
    current = categoria;
    filters.querySelectorAll('[data-filter]').forEach(function (btn) {
      var active = btn.dataset.filter === categoria;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
      if (active && scroll) btn.scrollIntoView({ block: 'nearest', inline: 'center' });
    });
    render(categoria);
    try { localStorage.setItem(KEY, categoria); } catch (e) {}
  }

  filters.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-filter]');
    if (btn && btn.dataset.filter !== current) setActive(btn.dataset.filter, true);
  });

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var exists = saved && filters.querySelector('[data-filter="' + saved + '"]');
  setActive(exists ? saved : 'todas');
})();
