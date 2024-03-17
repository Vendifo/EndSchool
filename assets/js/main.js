$(document).ready(function () {
    $('#burger').on('click', function () {
        $('#menu').slideToggle(500)
    });

    $('.title__slider').slick({
        
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive:[
            {
                breakpoint:1099,
                settings:{
                    centerMode: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint:9999,
                settings:{
                    centerMode:true,
                    centerPadding:"0px",
                    slidesToShow: 3,
                    variableWidth:true,
                }
            }
        ]
    });

    $('.present__slider').slick({
        slidesToShow: 1,
        
        infinite: true,
        autoplay: true,
        arrows: false,
        
        centerPadding: "25%",
        variableWidth: true,
        responsive : [
            {
                breakpoint:1099,
                settings: { 
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint:9999,
                settings: { 
                    slidesToScroll:2,
                    dots: true,
                }
            }
        ]
    });

    $('.result__slider').slick ({
        
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 300000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint:1099,
                settigns : { 
                    slidesToShow: 1,
                }
            },
            { 
                breakpoint : 9999,
                settings : {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding : "25%",
                    variableWidth : true,
                }
            }
        ]
    });

    $('#phoneInput').inputmask('+7 (999) 999-99-99');
});