document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  if (toggle && navbar) {
    toggle.addEventListener('click', () => navbar.classList.toggle('open'));
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initInventoryFilters();
  initContactForm();
});

function initInventoryFilters() {
  const cards = document.querySelectorAll('[data-vehicle]');
  if (!cards.length) return;

  const makeFilter = document.getElementById('filter-make');
  const typeFilter = document.getElementById('filter-type');
  const priceFilter = document.getElementById('filter-price');
  const resultsCount = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  const grid = document.getElementById('inventory-grid');

  function applyFilters() {
    const make = makeFilter ? makeFilter.value : 'all';
    const type = typeFilter ? typeFilter.value : 'all';
    const maxPrice = priceFilter ? parseInt(priceFilter.value, 10) : Infinity;
    let visible = 0;

    cards.forEach((card) => {
      const matchesMake = make === 'all' || card.dataset.make === make;
      const matchesType = type === 'all' || card.dataset.type === type;
      const matchesPrice = isNaN(maxPrice) || parseInt(card.dataset.price, 10) <= maxPrice;
      const show = matchesMake && matchesType && matchesPrice;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (resultsCount) resultsCount.textContent = `${visible} vehicle${visible === 1 ? '' : 's'} found`;
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
    if (grid) grid.style.display = visible === 0 ? 'none' : 'grid';
  }

  [makeFilter, typeFilter, priceFilter].forEach((el) => {
    if (el) el.addEventListener('change', applyFilters);
  });

  applyFilters();
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.querySelector('#name').value.trim();

    status.textContent = `Thanks, ${name}! Your message has been received. A member of our team will reach out shortly.`;
    status.className = 'form-status success';
    form.reset();
  });
}
