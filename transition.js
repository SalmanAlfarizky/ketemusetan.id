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
        // Tambahkan class fade-out
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 600); // sama dengan durasi CSS
      }
    });
  });
});
