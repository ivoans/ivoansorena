/**
 * contact.js — Contact page: local time display + form → WhatsApp
 */

(function () {
  'use strict';

  // ── Dynamic local time (Argentina) ──────────────────
  var timeEl = document.getElementById('local-time');

  function updateTime() {
    var t = new Date().toLocaleTimeString('es', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Argentina/Buenos_Aires',
      hour12: false,
    });
    timeEl.textContent = t + ' ART // ARGENTINA';
  }

  if (timeEl) {
    updateTime();
    setInterval(updateTime, 30000);
  }

  // ── Contact form → WhatsApp ─────────────────────────
  var form = document.getElementById('contact-form');
  var submitBtn = document.getElementById('submit-btn');
  var formStatus = document.getElementById('form-status');

  form?.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = document.getElementById('contact-name').value.trim();
    var email = document.getElementById('contact-email').value.trim();
    var message = document.getElementById('contact-message').value.trim();

    var text =
      'Nuevo mensaje de contacto:\n\n' +
      'Hola, soy ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Mensaje:\n' + message;

    window.open(
      'https://api.whatsapp.com/send?phone=2954572601&text=' +
        encodeURIComponent(text),
      '_blank',
      'noopener,noreferrer'
    );

    // UI feedback
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<span class="material-symbols-outlined text-sm align-middle mr-2">check_circle</span>ENVIADO';
    formStatus.textContent = 'Gracias. Te respondo en menos de 24h.';
    formStatus.classList.remove('hidden');

    setTimeout(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = 'ENVIAR_MENSAJE';
      formStatus.classList.add('hidden');
      form.reset();
    }, 4000);
  });
})();
