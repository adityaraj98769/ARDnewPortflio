 // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  })();
  document.querySelectorAll('a, button, .skill-tag, .project-card, .stat-box').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      ring.style.width = '50px'; ring.style.height = '50px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      ring.style.width = '36px'; ring.style.height = '36px';
    });
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => obs.observe(el));

 // EmailJS init
emailjs.init("0KpnCeTqIKol1X-rD");

// Contact form handler
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
      name:    document.getElementById("name").value.trim(),
      email:   document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
      time:    new Date().toLocaleString()
    };

    const btn = contactForm.querySelector("button[type='submit']");
    const originalText = btn.innerText;

    btn.innerText = "Sending...";
    btn.disabled = true;

    emailjs.send("service_im4c2ls", "template_862ep26", params)
      .then(() => {
        showToast("✅ Message sent successfully!");
        contactForm.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showToast("❌ Failed to send. Please try again.", true);
      })
      .finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
      });
  });
}

// Toast notification (replaces ugly browser alert)
function showToast(message, isError = false) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.innerText = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: ${isError ? "#ff4444" : "#FFD200"};
    color: ${isError ? "#fff" : "#000"};
    font-family: 'JetBrains Mono', monospace;
    font-size: .82rem;
    font-weight: 600;
    letter-spacing: .05em;
    padding: 1rem 1.8rem;
    z-index: 9999;
    border: 1px solid ${isError ? "#cc0000" : "#c9a700"};
    animation: fadeUp .3s ease forwards;
    max-width: 340px;
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity .4s";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}