

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['<img class="w-auto" src="assets/img/icon/arrowLeft.png" alt="">', '<img class="w-auto" src="assets/img/icon/arrowRight.png" alt="">'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav:true,
        margin: 20,
        dots: true,
        // autoplay: true,
        autoplayTimeout: 4000,
        navText: ['<img class="w-auto" src="assets/img/icon/arrowLeft.png" alt="">', '<img class="w-auto" src="assets/img/icon/arrowRight.png" alt="">'],
        responsive: {
            0: {
                items: 1,
                nav:false,
                margin: 15,
            },
            576: {
                items: 1,
                nav:false,
                stagePadding: 100,
            },
            992: {
                items: 3
            }
            }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
