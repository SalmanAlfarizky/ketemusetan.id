// Fade-in ketika halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

// Fade-out ketika klik menu navbar
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // cegah pindah halaman langsung
    const target = this.href;

    // Tambah class fade-out
    document.body.classList.remove("show");

    // Setelah animasi selesai → pindah halaman
    setTimeout(() => {
      window.location.href = target;
    }, 350); // waktu harus sama dengan CSS transition
  });
});

