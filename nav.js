// Shared navigation and layout
const NAV_ITEMS = [
  { section: 'Brand' },
  { href: 'index.html', icon: '◈', label: 'Overview' },
  { href: 'brand.html', icon: '✦', label: 'Brand Story' },
  { section: 'Identity' },
  { href: 'logos.html', icon: '⬡', label: 'Logos' },
  { href: 'colours.html', icon: '◉', label: 'Colours' },
  { href: 'typography.html', icon: 'Aa', label: 'Typography' },
  { section: 'Voice' },
  { href: 'tov.html', icon: '❝', label: 'Tone of Voice' },
  { section: 'Product' },
  { href: 'ui.html', icon: '▣', label: 'UI Components' },
  { section: 'Resources' },
  { href: 'ai-context.html', icon: '✺', label: 'AI Context' },
];

function buildSidebar() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  let html = `
    <div class="sidebar-logo">
      <img class="mark" src="logos/Thruness-Icon-Light.svg" alt="Thruness icon" width="76" height="36">
      <div class="wordmark">Thruness</div>
      <div class="tagline">Brand Guidelines</div>
    </div>
    <nav>`;

  NAV_ITEMS.forEach(item => {
    if (item.section) {
      html += `<div class="nav-section">${item.section}</div>`;
    } else {
      const active = current === item.href ? 'active' : '';
      html += `<a href="${item.href}" class="${active}"><span class="icon">${item.icon}</span>${item.label}</a>`;
    }
  });

  html += `</nav>
    <div class="sidebar-footer">Version 1.0 &nbsp;·&nbsp; May 2026<br>Prepared by Salo Creative</div>`;

  return html;
}

function buildMobileNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  let links = NAV_ITEMS
    .filter(i => i.href)
    .map(i => `<a href="${i.href}" class="${current === i.href ? 'active' : ''}">${i.label}</a>`)
    .join('');
  return `
    <nav class="mobile-nav">
      <span class="wordmark">Thruness</span>
      <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">${links}</div>`;
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function initPage() {
  document.getElementById('sidebar').innerHTML = buildSidebar();
  document.getElementById('mobileNavContainer').innerHTML = buildMobileNav();
}

document.addEventListener('DOMContentLoaded', initPage);
