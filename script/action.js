/* $('header nav .gnb li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');

    let liIndex = $(this).index() //0,1,2,3
    let sectionTop = $('#fullpage > div').eq(liIndex).offset().top;

    $('html, body').animate({ scrollTop: sectionTop })

    return false

}) */

// $('header nav li').eq(1).click(function () {
//     $('html').animate({ scrollTop: '1300px' })
// })

// $('header nav li').eq(3).click(function () {
//     $('html').animate({ scrollTop: '2600px' })
// }) 

// $('header nav li').eq(4).click(function () {
//     $('html').animate({ scrollTop: '5200px' })
// }) 



$('#section3 .click').click(function () {
    $('#section3 figure').stop().hide()
    $('#section3 .img_box').stop().fadeIn(300).css({ display: 'flex' })
    $('#section3 .close').stop().fadeIn(300).css({ display: 'flex' })
})
$('#section3 .img_box li').click(function () {
    let imgSrc = $(this).find('img').attr('src')
    $('.gallery_modal .m1').attr('src', imgSrc)
    $('.gallery_modal').show().css({ display: 'flex' })

    $('body').css({ overflow: 'hidden' })
    return false
})
$('#section4 .swiper-slide').click(function () {
    let imgSrc2 = $(this).find('img').attr('src')
    $('.gallery_modal2 .m1').attr('src', imgSrc2)
    $('.gallery_modal2').show().css({ display: 'flex' })
    $('body').css({ overflow: 'hidden' })

})

$('#section3 .close').click(function () {
    $(this).stop().fadeOut(300)
    $('#section3 .img_box').stop().fadeOut(300)
    $('.gallery_modal').hide()
    $('#section3 figure').fadeIn()



})
$('.gallery_modal').click(function (e) {
    if (e.target == this) {
        $(this).fadeOut(500)
    }


    $('body').css({ overflow: '' })

})

$('.gallery_modal2').click(function (e) {
    if (e.target == this) {
        $(this).fadeOut(500)
    }


    $('body').css({ overflow: '' })

})

$(document).keydown(function (e) {
    if (e.key == 'Escape') {
        $('.gallery_modal').fadeOut(500)
        $('.gallery_modal2').fadeOut(500)
        $('body').css({ overflow: '' })
    }

})

function bar() {
    let scrT = $(window).scrollTop();
    let winW = $(window).width();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = winW / (docH - winH);
    $('.bar').width(scrT * ratio)
}
function bar2() {
    let scrT = $(window).scrollTop();
    let prog2 = $('.page_progress2').height();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = prog2 / (docH - winH);
    $('.bar2').height(scrT * ratio);
}

$(window).scroll(function () {
    bar()
    bar2()
})

$(window).resize(function () {
    bar()
    bar2()
})




