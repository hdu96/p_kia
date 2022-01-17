

$('.trigger_menu').click(function(){
    $('.header_wrap').slideDown();
    $('.head').css("display","none");
});
$('.h_close').click(function(){
    $('.header_wrap').slideUp();
    $('.head').css("display","flex");
});


$(window).scroll(function(){
    if(window.scrollY > 0){
        $('.talk_link').css("right","60px");
        $('.go_top').css("display","block");
    }else{
        $('.talk_link').css("right","15px");
        $('.go_top').css("display","none");
    }
})

$('.go_top').click(function(){
    $('html,body').animate({
        scrollTop: 0
    },500);
});

//sub_niro
$('.box1 > .bgwrap:nth-child(1)').click(function(){
    $('.iframe_box').addClass('vopen');
});
$('.i_closer').click(function(){
    $('.iframe_box').removeClass('vopen');
})

$('.box1 > .bgwrap:nth-child(2)').click(function(){
    $('.iframe_box2').addClass('vopen');
});
$('.i_closer').click(function(){
    $('.iframe_box2').removeClass('vopen');
})

$('.box2 > .bgwrap2:nth-child(1)').click(function(){
    $('.iframe_box3').addClass('vopen');
});
$('.i_closer').click(function(){
    $('.iframe_box3').removeClass('vopen');
})

$('.box2 > .bgwrap2:nth-child(2)').click(function(){
    $('.iframe_box4').addClass('vopen');
});
$('.i_closer').click(function(){
    $('.iframe_box4').removeClass('vopen');
})




function slide(){
    const swiper = new Swiper(".mySwiper", {
        loop:true,
        slidesPerView: 1,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });

    const swiper2 = new Swiper(".mySwiper2", {
        loop:true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
        },
    });
    
    const swiper3 = new Swiper(".mySwiper3", {
        loop:true,
        slidesPerView: 1,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
        },
    });

    const swiper4 = new Swiper(".mySwiper4", {
        loop:true,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
        },
    });
    const swiper5 = new Swiper(".mySwiper5", {
        loop:true,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination5",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiper6 = new Swiper(".mySwiper6", {
        loop:true,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination6",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

window.onload=slide;
    
