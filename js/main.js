document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type:"slide",
        width: '100%',
        height:"100vh",
        autoplay:"enable",
        rewind:true,
        interval: 2500,
        cover:true
    }).mount();
} );