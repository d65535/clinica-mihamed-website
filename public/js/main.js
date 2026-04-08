document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  document.addEventListener('click', function(e) {
    var toggle = e.target.closest('#navToggle');
    if (!toggle) return;

    var menu = document.getElementById('mobileMenu');
    var isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  document.addEventListener('click', function(e) {
    var link = e.target.closest('.mobile-menu a');
    if (!link) return;

    var menu = document.getElementById('mobileMenu');
    var toggle = document.getElementById('navToggle');
    if (menu && toggle) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Accordion toggle
  document.addEventListener('click', function(e) {
    var header = e.target.closest('.accordion__header');
    if (!header) return;

    var item = header.parentElement;
    var wasOpen = item.classList.contains('open');

    // Close all siblings
    var accordion = item.parentElement;
    accordion.querySelectorAll('.accordion__item.open').forEach(function(el) {
      el.classList.remove('open');
    });

    // Toggle clicked item
    if (!wasOpen) {
      item.classList.add('open');
    }
  });
});
