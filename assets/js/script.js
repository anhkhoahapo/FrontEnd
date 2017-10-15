window.onload = function() {

    window.addEventListener('scroll', scrollHandle);

    let prevSlide = document.getElementById("btn-prev");
    let nextSlide = document.getElementById("btn-next");
    let slideItems = document.getElementsByClassName("slide-item");
    let dots = document.getElementsByClassName("dot");

    let curSlide = 0;

    toSlide(curSlide);

    prevSlide.addEventListener('click', function() {
        toSlide((curSlide - 1 + slideItems.length) % slideItems.length);
    });
    nextSlide.addEventListener('click', function() {
        toSlide((curSlide + 1) % slideItems.length);
    });

    for (let i = 0; i < dots.length; i++) {
        dots[i].id = i;
        dots[i].addEventListener('click', function() {
            toSlide(this.id);
        });
    }

    function toSlide(n) {
        curSlide = n;
        slideItems[curSlide].classList.remove('sr-only');
        dots[curSlide].style.backgroundColor = '#fff';

        for (let i = 0; i < slideItems.length; i++) {
            if (i != curSlide) {
                slideItems[i].classList.add('sr-only');
                dots[i].style.backgroundColor = 'rgba(0,0,0,0)';
            }
        }
    }

    function scrollHandle(e) {
        let scrollY = window.scrollY;
        let navbar = document.getElementById('main-nav');
        let btnScrTop = document.getElementById('btn-scrolltop');
        let btnNextSection = document.getElementById('btn-nextsection');

        navbar.style.transition = "all 0.5s";

        if (scrollY > 100) {
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = '0 0 20px 0 grey';
            btnScrTop.classList.remove('sr-only');
            btnNextSection.classList.add('sr-only');
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            navbar.style.boxShadow = 'none';
            btnScrTop.classList.add('sr-only');
            btnNextSection.classList.remove('sr-only');
        }
    }

}