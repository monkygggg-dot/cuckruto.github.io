/* =============================================
   R12 Tech Solutions - main.js
   Minimal vanilla JS — mobile nav toggle only
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Close nav when a link is clicked (mobile)
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  // Chat widget toggle (stub)
  var chatBubble = document.querySelector('.chat-bubble');
  var chatPanel  = document.querySelector('.chat-panel');

  if (chatBubble && chatPanel) {
    chatBubble.addEventListener('click', function () {
      chatPanel.style.display =
        chatPanel.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Highlight active nav link based on current page filename
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current) {
      a.classList.add('active');
    }
  });
});
