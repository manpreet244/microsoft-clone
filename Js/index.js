//menu
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", (elem) => {
  let bars = document.querySelectorAll(".bar");
  let content = document.querySelector("#content-box");
  bars = Array.from(bars);
  bars[0].classList.toggle("-rotate-45");
  bars[2].classList.toggle("rotate-45");
  bars[1].classList.toggle("opacity-0");
  bars[0].classList.toggle("translate-y-[6px]");
  bars[2].classList.toggle("-translate-y-[10px]");
  content.classList.toggle("-translate-y-[1000px]");
});


//search
const searchbutton = document.getElementById("searchbtn");
const searchbuttonxmd = document.getElementById("xmdsearchbtn");
const navLinks = document.getElementById("navlinks")
const search =  () => {
  let content = document.getElementById("searchinp");
  content.classList.remove("-translate-y-full");
  navLinks.style.opacity = "0"
  
  const backbtn = document.getElementById("search-back-btn");
  backbtn.addEventListener("click", ()=>{
    content.classList.add('-translate-y-full');
    navLinks.style.opacity = "100%"
  })
}
searchbutton.addEventListener("click", search);
searchbuttonxmd.addEventListener("click", search);

// slide logic

const carousel = document.getElementById('carousel');
let slideselem = carousel.getElementsByClassName('slides');
let slides = Array.from(slideselem)
const slideWidth = carousel.querySelector('.slides').offsetWidth;
const prevButton = document.getElementById('Back');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('Next');
const slideDotsDiv = document.getElementById("slide-indi")
let slideIndicators = Array.from(slideDotsDiv.getElementsByTagName('div'));
let currentIndex = 0;
let isPlaying = false;
let interval;

function moveToSlide(index) {
  slides.forEach((elem, idx)=>{
    elem.style.transform = `translateX(-${index * 100}%)`;
    if (index == idx) {
      elem.style.opacity = '100%'
    }
    else{
      elem.style.opacity = '0'
    }
    slideIndicators.forEach((elem, ind)=>{
      if(ind == index){
        elem.style.backgroundColor = "black"
      }
      else{
        elem.style.backgroundColor = "white"
      }
    })
  })
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  moveToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveToSlide(currentIndex);
}

function togglePlayPause() {
  isPlaying = !isPlaying;
  playPauseButton.textContent = isPlaying ? playPauseButton.src = "/statics/pause.png" : playPauseButton.src = "/statics/play.png";
  if (isPlaying) {
    interval = setInterval(nextSlide, 5000);
  } else {
    clearInterval(interval);
  }
}

prevButton.addEventListener('click', prevSlide);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextSlide);

// Start autoplay when the page loads
togglePlayPause();




const scrollTopButton = document.getElementById('scrollTopButton');

  // Add a scroll event listener to the window
  window.addEventListener('scroll', () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      scrollTopButton.style.opacity = '1';
      scrollTopButton.style.pointerEvents = 'auto';
    } else {
      // Hide the button when at the top of the page
      scrollTopButton.style.opacity = '0';
      scrollTopButton.style.pointerEvents = 'none';
    }
  });

  // Add a click event listener to the button
  scrollTopButton.addEventListener('click', () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });