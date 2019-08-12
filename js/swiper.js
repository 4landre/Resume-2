!function () {
    var view = document.querySelector('.swiper')
    var controller = function (view) {
        var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    controller(view)

}.call()