document.addEventListener("DOMContentLoaded", () => {
    
    // === PAGE FADE-IN ===
    document.body.classList.add("page-loaded");

    // === PAGE TRANSITION ===
    document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute("href");
        if (!url || url.startsWith("#") || url.startsWith("http")) return;
        link.addEventListener("click", e => {
            e.preventDefault();
            document.body.classList.add("page-exit");
            setTimeout(() => window.location.href = url, 300);
        });
    });

    // === MODAL ===
    const items = document.querySelectorAll('.katalog-item');
    const modal = document.getElementById('setan-modal');
    const closeBtn = document.querySelector('.close-btn');

    const leftBtn = document.querySelector(".slide-btn.left");
    const rightBtn = document.querySelector(".slide-btn.right");

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');

    // === Data Setan ===
    const dataSetan = {
    1: {
        nama: "Kuntilanak",
        deskripsi: "Tangisnya mengantar jiwa yang hilang arah.",
        harga: "Rp 150.000",
        foto: "img/setan/Kuntilanak.jpg"
    },
    2: {
        nama: "Pocong",
        deskripsi: "Menunggu tali kafan dilepas.",
        harga: "Rp 120.000",
        foto: "img/setan/pocong.jpg"
    },
    3: {
        nama: "Genderuwo",
        deskripsi: "Penunggu pohon besar yang menyukai aroma darah.",
        harga: "Rp 180.000",
        foto: "img/setan/genderuwo.jpg"
    },
    4: {
        nama: "Tuyul",
        deskripsi: "Kecil, cepat, dan haus akan emas manusia.",
        harga: "Rp 90.000",
        foto: "img/setan/TUYUL.jpg"
    },
    5: {
        nama: "Leak",
        deskripsi: "Makhluk malam yang menari di atas api kehidupan.",
        harga: "Rp 200.000",
        foto: "img/setan/leak.jpg"
    },
    6: {
        nama: "Wewe Gombel",
        deskripsi: "Melindungi anak hilang, tapi membenci orang dewasa.",
        harga: "Rp 160.000",
        foto: "img/setan/wewegombel.jpg"
    }

    };

    let currentID = 1;

    function loadSetan(id, direction = "right") {
    const s = dataSetan[id];

    modalImg.src = s.foto;
    modalTitle.textContent = s.nama;
    modalDesc.textContent = s.deskripsi;
    modalPrice.textContent = s.harga;

    // Hapus animasi dulu biar bisa di-trigger ulang
    modalImg.classList.remove("slide-animation", "slide-animation-left");
    modalTitle.classList.remove("slide-animation", "slide-animation-left");
    modalDesc.classList.remove("slide-animation", "slide-animation-left");
    modalPrice.classList.remove("slide-animation", "slide-animation-left");

    void modalImg.offsetWidth; // reset DOM

    if (direction === "right") {
        modalImg.classList.add("slide-animation");
        modalTitle.classList.add("slide-animation");
        modalDesc.classList.add("slide-animation");
        modalPrice.classList.add("slide-animation");
    } else {
        modalImg.classList.add("slide-animation-left");
        modalTitle.classList.add("slide-animation-left");
        modalDesc.classList.add("slide-animation-left");
        modalPrice.classList.add("slide-animation-left");
    }
}


    // Klik item → buka modal
    items.forEach(item => {
        item.addEventListener('click', () => {
            currentID = Number(item.getAttribute('data-id'));
            loadSetan(currentID);
            modal.classList.add('active');
            document.body.style.overflow = "hidden";
        });
    });

    // Tombol slide kanan
    rightBtn.addEventListener('click', () => {
    currentID++;
    if (currentID > 6) currentID = 1;
    loadSetan(currentID, "right");
    });

    // Tombol slide kiri
    leftBtn.addEventListener('click', () => {
    currentID--;
    if (currentID < 1) currentID = 6;
    loadSetan(currentID, "left");
    });

    // Tutup modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = "auto";
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = "auto";
        }
        
        const container = document.getElementById("particles");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // posisi random
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = window.innerHeight + "px";

  // ukuran random
  const size = Math.random() * 6 + 3;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  container.appendChild(particle);

  // hapus setelah selesai
  setTimeout(() => {
    particle.remove();
  }, 4000);
}

setInterval(createParticle, 150);

        
    });
});

