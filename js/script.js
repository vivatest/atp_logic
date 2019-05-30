/*Slick Slider*/
$(".slider").slick({
autoplay: true,
dots: true,
rows:2,
slidesToShow: 1,
slidesToScroll: 1,
customPaging : function(slider, i) {
var thumb = $(slider.$slides[i]).data();
var number = i+1;
return '<a>'+number+'</a>';

},
responsive: [{ 
    breakpoint: 500,
    settings: {
        dots: false,
        arrows: true,
        infinite: true
    } 
}]
});
/*Slick Slider*/
