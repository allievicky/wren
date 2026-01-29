const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImages = document.querySelectorAll(".gallery-thumb");
const prevBtn = document.querySelector(".lightbox-arrow.left");
const nextBtn = document.querySelector(".lightbox-arrow.right");

let currentIndex = 0;

function showImage(index) {
  const img = galleryImages[index];
  lightboxImg.style.opacity = "0";

  const tempImg = new Image();
  tempImg.src = img.src;
  tempImg.onload = () => {
    lightboxImg.src = tempImg.src;
    requestAnimationFrame(() => {
      lightboxImg.style.opacity = "1";
    });
  };
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightbox.classList.add("active");
    document.body.classList.add("no-scroll");
    showImage(currentIndex);
  });
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") lightbox.click();
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});
