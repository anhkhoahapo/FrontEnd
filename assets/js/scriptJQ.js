$(document).ready(function() {
    $(document).scrollTop(0);

    (function bindScrollEvents(){
        let sections = ['#home', '#courses', '#bookshelf', '#student', '#teacher', '#blog', '#contact', 'footer'];
        let sectionsSt = [];

        for (let i = 0; i < sections.length; i++) {
            sectionsSt.push($(sections[i]).offset().top);
        }

        let curSection = 0;
        let lastAnimation = 0;
        const animateTime = 400;
        const periodQuiet = 400;

        $(".navbar").find("a").click(function(event) {
            event.preventDefault();

            if(!allowAnimate())
                return;

            let section = sections.indexOf($(this).attr("href"));
            curSection = section;
            toSection(section);
        });

        $(window).on('wheel', wheelScroll);

        $(window).on('keyup keydown',keyScroll);

        function keyScroll(e){
            if([37,38,39,40].includes(e.keyCode)){
                e.preventDefault();

                if(!allowAnimate())
                return;
                
                if(e.keyCode === 40 || e.keyCode === 39) 
                    if(curSection < sections.length - 1)
                        toSection(++curSection);
                if(e.keyCode === 38 || e.keyCode === 37) 
                    if(curSection > 0)
                        toSection(--curSection);
            }
        }

        function wheelScroll(event){
            if(!allowAnimate()){
                event.preventDefault();
                return;
            }

            let delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            
            if(delta < 0){
                if(curSection < sections.length - 1){
                    toSection(++curSection);
                }
            } else {
                if(curSection > 0){
                    toSection(--curSection);
                }
            }
        }

        $("#btn-scrolltop").on('click', function(){
            if(!allowAnimate())
                return;

            curSection = 0;
            toSection(0);
        });

        $("#btn-nextsection").on('click', function(){
            if(!allowAnimate())
                return;

            curSection = 1;
            toSection(1);
        });

        function allowAnimate(){
            let timeNow = new Date().getTime();
            return timeNow - lastAnimation >  periodQuiet + animateTime;
        }

        function toSection(section){
            lastAnimation = new Date().getTime();

            $("html, body").animate({
                scrollTop: sectionsSt[section]
            }, animateTime);
        }
        
        $(window).on('scroll', changeScrBtn);

        function changeScrBtn(e) {
            let scrollY = window.scrollY;
            let btnScrTop = $("#btn-scrolltop");
            let btnNextSection = $("#btn-nextsection");

            if (scrollY > 100) {
                btnScrTop.css('display', 'block');
                btnNextSection.css('display', 'none');
            } else {
                btnScrTop.css('display', 'none');
                btnNextSection.css('display', 'block');
            }
        }

    })();

    (function bindSlideEvents(){
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
    })();

    (function loadIframe(){
        $('.fb-iframe iframe').attr("src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaposoft%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1369381916511178");
        $('.map-iframe iframe').attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8130201684157!2d105.81927231498011!3d21.000130994130807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac85be3a80f7%3A0x26f3b5f7c126cf4c!2zMjMgVMO0IFbEqW5oIERp4buHbiwgS2jGsMahbmcgVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1507954959752");
    })();


    // (function changeNavOnScroll(){
    //     let animating = 0;

    //     function navbarToggle(){
    //         let st = $(window).scrollTop();
    //         if (st > 180) {
    //             navbar.css({
    //                 'background-color': 'white',
    //                 'box-shadow': '0 0 20px 0 grey'
    //             });
                
    //             if (st < prevScroll) {
    //                 animating = 1;
    //                 navbar.slideDown(200, () => { animating = 0 });
    //             } else if (st > prevScroll) {
    //                 animating = 1;
    //                 navbar.slideUp(200, () => { animating = 0 });
    //             }
    //         } else {
    //             animating = 1;
    //             navbar.css({
    //                 'background-color': 'rgba(0,0,0,0)',
    //                 'box-shadow': 'none'
    //             });
                
    //             navbar.slideDown(200, () => { animating = 0 });
    //         }

    //         prevScroll = st;
    //     }
    // })();
});