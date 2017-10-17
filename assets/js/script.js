window.onload = function() {

    window.addEventListener('scroll', scrollHandle);

    function scrollHandle(e) {
        let scrollY = window.scrollY;
        let navbar = document.getElementById("main-nav");
        let btnScrTop = document.getElementById("btn-scrolltop");
        let btnNextSection = document.getElementById("btn-nextsection");

        navbar.style.transition = 'all 0.5s';

        if (scrollY > 100) {
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = '0 0 20px 0 grey';
            btnScrTop.style.display = 'block';
            btnNextSection.style.display = 'none';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            navbar.style.boxShadow = 'none';
            btnScrTop.style.display = 'none';
            btnNextSection.style.display = 'block';
        }
    }

    let prevSlide = document.getElementById("btn-prev");
    let nextSlide = document.getElementById("btn-next");
    let slideItems = document.getElementsByClassName("slide-item");
    let dots = document.getElementsByClassName("dot");

    let curSlide = 0;

    toSlide(curSlide);

    prevSlide.addEventListener('click', () => {
        toSlide((curSlide - 1 + slideItems.length) % slideItems.length);
    });
    nextSlide.addEventListener('click', () => {
        toSlide((curSlide + 1) % slideItems.length);
    });

    for (let i = 0; i < dots.length; i++) {
        dots[i].id = i;
        dots[i].addEventListener('click', () => {
            toSlide(this.id);
        });
    }

    function toSlide(n) {
        curSlide = n;
        slideItems[curSlide].style.display = 'block';
        dots[curSlide].style.backgroundColor = '#fff';

        for (let i = 0; i < slideItems.length; i++) {
            if (i != curSlide) {
                slideItems[i].style.display = 'none';
                dots[i].style.backgroundColor = 'rgba(0,0,0,0)';
            }
        }
    }
}