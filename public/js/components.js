function renderHeader() {
  var path = window.location.pathname;
  function isActive(href) {
    if (href === '/' && (path === '/' || path === '/index.html')) return ' aria-current="page"';
    if (href !== '/' && path.startsWith(href)) return ' aria-current="page"';
    return '';
  }

  document.getElementById('header').innerHTML =
    '<header class="header">' +
      '<div class="header__inner">' +
        '<a href="/" class="header__logo">' +
          '<img src="/img/logo-mihamed.png" alt="Clinica MihaMed" width="150" height="60">' +
          '<span class="header__brand">CLINICA <span>MIHAMED</span></span>' +
        '</a>' +
        '<nav class="header__nav">' +
          '<a href="/specializari.html"' + isActive('/specializari') + '>Specializări</a>' +
          '<a href="/echipa.html"' + isActive('/echipa') + '>Echipa Medicală</a>' +
          '<a href="/preturi.html"' + isActive('/preturi') + '>Prețuri</a>' +
          '<a href="/contact.html"' + isActive('/contact') + '>Contact</a>' +
        '</nav>' +
        '<a href="/contact.html" class="header__cta btn btn--primary">Programează-te</a>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Meniu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</header>' +
    '<div class="mobile-menu" id="mobileMenu">' +
      '<a href="/">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' +
        'Acasă' +
      '</a>' +
      '<a href="/specializari.html">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/></svg>' +
        'Specializări' +
      '</a>' +
      '<a href="/echipa.html">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' +
        'Echipa Medicală' +
      '</a>' +
      '<a href="/preturi.html">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' +
        'Prețuri' +
      '</a>' +
      '<a href="/contact.html">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>' +
        'Contact' +
      '</a>' +
      '<a href="/despre-noi.html">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>' +
        'Despre noi' +
      '</a>' +
      '<a href="/contact.html" class="btn btn--primary" style="margin-top:20px;text-align:center;justify-content:center;">Programează-te acum</a>' +
      '<div style="text-align:center;margin-top:16px;">' +
        '<a href="tel:+40770818368" style="font-size:1rem;font-weight:600;color:var(--verde);">0770 818 368</a>' +
        '<div style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-top:4px;">Luni - Vineri, 08:00 - 20:00</div>' +
      '</div>' +
    '</div>';
}

function renderFooter() {
  document.getElementById('footer').innerHTML =
    '<footer class="footer">' +
      '<div class="footer__inner">' +
        '<div>' +
          '<div class="footer__heading">Contact</div>' +
          '<div class="footer__text">' +
            'Str. Călușei 5A, et. 1<br>' +
            'Sector 2, București<br><br>' +
            '<a href="tel:+40770818368">0770 818 368</a><br>' +
            '<a href="tel:+40314369309">0314 369 309</a>' +
          '</div>' +
          '<div class="footer__social">' +
            '<a href="https://www.facebook.com/clinicamihamed" target="_blank" rel="noopener" aria-label="Facebook">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="footer__heading">Program</div>' +
          '<div class="footer__text">' +
            'Luni - Vineri:<br><strong style="color:#fff;">08:00 - 20:00</strong><br><br>' +
            'Sâmbătă - Duminică:<br><strong style="color:#fff;">Închis</strong>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="footer__heading">Link-uri utile</div>' +
          '<div class="footer__text">' +
            '<a href="/specializari.html">Specializări</a><br>' +
            '<a href="/preturi.html">Lista de prețuri</a><br>' +
            '<a href="/echipa.html">Echipa medicală</a><br>' +
            '<a href="/despre-noi.html">Despre noi</a><br>' +
            '<a href="/confidentialitate.html">Politica GDPR</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="footer__copyright">' +
        '&copy; ' + new Date().getFullYear() + ' Clinica MihaMed. Toate drepturile rezervate.' +
      '</div>' +
    '</footer>';
}

function renderStickyCta() {
  document.getElementById('sticky-cta').innerHTML =
    '<a href="/contact.html" class="btn btn--primary">Programează-te</a>' +
    '<a href="tel:+40770818368" class="btn--call">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
      ' Sună' +
    '</a>';
}

document.addEventListener('DOMContentLoaded', function() {
  renderHeader();
  renderFooter();
  if (document.getElementById('sticky-cta')) {
    renderStickyCta();
  }
});
