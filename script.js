

/* ✅ Copy Desktop Menu → Mobile Menu */
const desktopMenu = document.querySelector(".desktop-nav");
document.getElementById("mobileMenu").innerHTML = desktopMenu.innerHTML;

/* ✅ Hamburger Logic */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


function openMenu(){
    mobileMenu.classList.add("open");
    document.body.classList.add("menu-active");
    menuBtn.classList.add("active");
}

function closeMenu(){
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-active");
    menuBtn.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
});


/* ✅ Auto close on desktop */
window.addEventListener("resize", () => {
  if(window.innerWidth > 768){ closeMenu(); }
});





    // --- Carousel Functionality ---
    function initializeCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const container = carousel.parentElement;
        const items = carousel.querySelectorAll('.carousel-item');
        const prevButton = container.querySelector('.prev');
        const nextButton = container.querySelector('.next');

        if (items.length === 0) return;

        let currentIndex = 0;

        function updateCarousel() {
            // Calculate the width of one item + its right margin (30px total margin between items)
            // Use clientWidth of the first item to determine scrolling distance
            const itemWidth = items[0].offsetWidth + (parseFloat(window.getComputedStyle(items[0]).marginRight) || 0) + (parseFloat(window.getComputedStyle(items[0]).marginLeft) || 0);
            
            // Calculate transform value
            const transformValue = -currentIndex * itemWidth;
            carousel.style.transform = `translateX(${transformValue}px)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        // Update on window resize to handle responsiveness
        window.addEventListener('resize', updateCarousel);
        
        // Initial setup
        updateCarousel();
    }

    // Initialize the home page carousel
    initializeCarousel('home-carousel');

    // --- Active Navigation Link Styling (Simple Check) ---
    const path = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (path === href || (path === '' && href === 'index.html')) {
            link.style.borderBottom = '3px solid var(--color-primary)';
        }
    });

