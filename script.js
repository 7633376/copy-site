$(function(){

  //contact-btn 資料請求部分まで移動
  $('.contact-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top -75;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

  //small-contactbtn-a 資料請求部分まで移動 (レスポンシブ時)
  $('.small-contactbtn-a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top -60;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

//Q&A部分 answerの開閉動作
$('.panel').click(function(){
var $panelbottom=$(this).find('.panel-bottom');
if($panelbottom.hasClass('open')){
  $panelbottom.removeClass('open');
  $panelbottom.slideUp();

  $(this).find('.panel-close').hide();
  $(this).find('.panel-open').show();
}else{
  $panelbottom.addClass('open');
  $panelbottom.slideDown();

  $(this).find('.panel-open').hide();
  $(this).find('.panel-close').show();
}
});



//↓  スクロールボタン トップまで移動
  var $scroll_button = $(".scroll-button");
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > $(window).height()){
$scroll_button.css("opacity", "1.0");
    }else{
$scroll_button.css("opacity", "0");
    }
  });
$scroll_button.click(function(){
$("html,body").animate({scrollTop: 0}, 500, "swing");
  });

  


});