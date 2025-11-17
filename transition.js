document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show"); // fade-in saat load

  document.querySelectorAll('a[href^="/"], a[href$=".html"]').forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if(href && !href.startsWith("#")) {
        e.preventDefault();
        document.body.classList.add("fade-out"); // fade-out sebelum pindah
        setTimeout(() => window.location.href = href, 600);
      }
    });
  });
});
