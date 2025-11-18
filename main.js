// Ambil elemen-elemen penting
const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');
const body = document.body;

// Ambil elemen audio
const clickSound = document.getElementById('clickSound');

// Fungsi untuk memainkan suara
function playSound() {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

// Saat tombol "Mulai" diklik
btnZoomIn.addEventListener('click', () => {
  body.classList.add('zoomed'); // Tambah kelas 'zoomed' untuk memulai animasi
  playSound();
});

// Saat tombol "Kembali" diklik
btnZoomOut.addEventListener('click', () => {
  body.classList.remove('zoomed'); // Hapus kelas 'zoomed' untuk kembali
  playSound();
});