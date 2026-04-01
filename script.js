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

  // Initialize EmailJS

(function () {
  emailjs.init("0KpnCeTqIKol1X-rD"); // 🔁 Replace with your Public Key
})();

// Form submit handler
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // 🔹 Get form values
  const params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
    time: new Date().toLocaleString() // for {{time}}
  };

  // 🔹 Button reference (for UX)
  const btn = this.querySelector("button");
  const originalText = btn.innerText;

  // 🔄 Loading state
  btn.innerText = "Sending...";
  btn.disabled = true;

  // 📩 Send email
  emailjs.send("service_im4c2ls", "template_862ep26", params)
    .then(() => {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Try again.");
    })
    .finally(() => {
      // 🔁 Reset button
      btn.innerText = originalText;
      btn.disabled = false;
    });
});