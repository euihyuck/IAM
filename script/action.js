$('header nav .gnb li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');

    let liIndex = $(this).index() //0,1,2,3
    let sectionTop = $('#papa > div').eq(liIndex).offset().top;

    $('html, body').animate({scrollTop: sectionTop})

    return false

})

// $('header nav li').eq(1).click(function () {
//     $('html').animate({ scrollTop: '1300px' })
// })

// $('header nav li').eq(3).click(function () {
//     $('html').animate({ scrollTop: '2600px' })
// }) 

// $('header nav li').eq(4).click(function () {
//     $('html').animate({ scrollTop: '5200px' })
// }) 



$('#section3 .click').click(function(){
    $('#section3 figure').stop().hide()
    $('#section3 .img_box').stop().fadeIn(300).css({display:'flex'})
    $('#section3 .close').stop().fadeIn(300).css({display:'flex'})
})

$('#section3 .close').click(function(){
    $(this).stop().fadeOut(300)
    $('#section3 .img_box').stop().fadeOut(300)
    $('#section3 figure').fadeIn()
    
})