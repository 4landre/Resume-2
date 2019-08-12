!function () {
    var view = document.querySelector('.swiper')
    var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    })
}.call()