const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 0;


slides[current].style.display = "block";


function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}


function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}


function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}


let slideInterval = setInterval(nextSlide, 3000);


next.addEventListener("click", () => {
    nextSlide();
    resetInterval();
});
prev.addEventListener("click", () => {
    prevSlide();
    resetInterval();
});


function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}
