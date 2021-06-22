$('.card').on ('click',function() {
    let currTub = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTub).addClass('active');
})


$('.hamburger').on('click',function () {
    $('.head__menu').toggle();
})

$('.menu-close').on('click', function () {
    $('.head__menu').hide();
});


let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    stopOnLastSlide: false,
    autoplay: {
        delay : 2000
    }
});


ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [53.246, 50.261],
                zoom: 18,
                controls: ['zoomControl', 'geolocationControl', 'fullscreenControl']
            });
        }