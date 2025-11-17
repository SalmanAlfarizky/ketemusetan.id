document.addEventListener("DOMContentLoaded", () => {
  // Fade-in saat halaman dibuka
  document.body.classList.add("show");

  // Tangkap semua link internal
  const links = document.querySelectorAll('a[href^="/"], a[href$=".html"]');
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if(href && !href.startsWith("#")) {
        e.preventDefault();
        // fade-out sebelum pindah halaman
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 600); // durasi sama dengan CSS
      }
    });
  });
});

