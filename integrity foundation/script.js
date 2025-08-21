(() => {
  // Year in footer
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  // Highlight current nav link
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // Newsletter form
  const news = document.getElementById('newsletter-form');
  if (news) {
    news.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      if (!input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.classList.add('is-invalid');
        return;
      }
      input.classList.remove('is-invalid');
      alert('Thanks for subscribing!');
      news.reset();
    });
  }

  // Donation form
  const donateForm = document.getElementById('donation-form');
  if (donateForm) {
    const custom = document.getElementById('customAmount');
    document.querySelectorAll('.amount-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        custom.value = btn.dataset.amount;
        document.querySelectorAll('.amount-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    donateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      donateForm.classList.add('was-validated');
      if (!donateForm.checkValidity()) return;
      const amount = parseFloat(custom.value || 0);
      if (!amount || amount < 1) { alert('Please enter a valid amount.'); return; }
      alert('Proceeding to secure payment for $' + amount.toFixed(2));
    });
  }

  // Contact form
  const contact = document.getElementById('contact-form');
  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      contact.classList.add('was-validated');
      if (!contact.checkValidity()) return;
      alert('Message sent. Thank you!');
      contact.reset();
    });
  }
})();


document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navMenu");
    const navbarToggler = document.querySelector(".navbar-toggler");

    document.addEventListener("click", function (event) {
      const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

      if (!isClickInside && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  });