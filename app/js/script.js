$(function(){
  $('.menu-btn').click(function(){
    $('.header-about').toggleClass('header-about_active');
    $('.menu-btn__line').toggleClass('menu_btn__line_active');
    $(this).toggleClass('menu-btn_active');
  });
  
  $('.arrow').click(function(){
    $('.list').toggleClass('list_active')
    // $('.link-two').toggleClass('link-two_active')
  })

  
$('').click(function(){
  $('li').toggleClass('li_active')
})
$('.slick-dots').click(function(){
})
 let win = $(window).innerWidth();
 if(win <= 950 ){
  $('.devices-wrapper').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: false,
      centerMode: true,
        centerPadding: '30px',
    responsive: [
    {
      breakpoint: 950,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,

      }
    },
    {
      breakpoint: 500,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
      
      }
    },
    {
      breakpoint: 400,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 350,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '30px',
      }
    }
  ]
});
}
else{
  $('.devices-wrapper').slick('unslick')
}
$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  



})
const form = document.getElementById('form-wrapper')
const btn =  document.getElementById('btn')
let name = document.getElementById("first").value;
let last = document.getElementById("last").value;
let color = document.getElementById("color").value;





