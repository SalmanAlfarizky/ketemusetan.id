document.addEventListener("DOMContentLoaded", () => {
  // Fade + slide-in saat halaman dibuka
  document.body.classList.add("show");

  // Tangkap semua link internal
  const links = document.querySelectorAll('a[href^="/"], a[href$=".html"]');
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");

      if(href && !href.startsWith("#")) { // link ke halaman lain
        e.preventDefault();
        document.body.classList.remove("show"); // fade + slide-out
        document.body.style.transform = "translateY(-20px)"; // naik sedikit saat keluar
        setTimeout(() => {
          window.location.href = href;
        }, 600); // durasi sama dengan CSS
      }
    });
  });
});
