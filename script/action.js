$('header nav .gnb li').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
})

$('header nav li').eq(1).click(function () {
    $('html').animate({ scrollTop: '1300px' })
})

$('header nav li').eq(3).click(function () {
    $('html').animate({ scrollTop: '2600px' })
}) 

$('header nav li').eq(4).click(function () {
    $('html').animate({ scrollTop: '5200px' })
}) 



$('#section3 .click').click(function(){
    $('#section3 figure').hide(1000)
    $('#section3 .img_box').css({opacity:'1', visibility:'visible',transition:'1s'})
    $('#section3 .close').css({opacity:'1', visibility:'visible',transition:'0.5s'})
})

$('#section3 .close').dblclick (function(){
    $(this).css({opacity:'0', visibility:'hidden',transition:'1s'})   
    $('#section3 .img_box').css({opacity:'0', visibility:'hidden',transition:'1s'}) 
    $('#section3 figure').show(1000)
    
})