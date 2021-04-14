// スムーススクロール

$(function(){
  $('a[href^=#]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

 // ローディング
 $(function() {
  setTimeout(function(){
  $('.loading__logo').fadeIn(1600);
},500); //0.5秒後にロゴをフェードイン!
setTimeout(function(){
  $('.loading').fadeOut(500);
},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

//ヘッダーの透明度
$(function(){
  $(window).scroll(function(){
      var header=$('.header');
      var headerLink=$('.header__link');
      var headerNav=$('.nav');
      var sectionHeight = $('.section--main').outerHeight();
      var scrollPos=$(window).scrollTop();

      if( sectionHeight<scrollPos){
          header.css('display','none');
          headerLink.css('color','#444444')
          headerNav.css('color','#444444')
      }else{
          header.css('background','rgba(255, 255, 255, 0)');
          header.css('display','block');
          headerLink.css('color','#fff!important')
          headerNav.css('color','#fff')
      }
  });

});

$(function() {
 
  //マウスを乗せたら発動
  $('.header__link').hover(function() {
 
    //マウスを乗せたら色が変わる
    $(this).css('color', '#c00');
 
  //ここにはマウスを離したときの動作を記述
  }, function() {
 
    //色指定を空欄にすれば元の色に戻る
    $(this).css('background', '');
 
  });
});

$(function() {
  $('.container__slick').slick({
      dots: true, //下の丸ぽっち（インジケーター）を表示 
      autoplay: true, //自動再生 
      autoplaySpeed: 5000 //自動再生の速度 
      //ここにオプションを書いていく 
  });
});

var $win = $(window);

$win.on('load resize', function() {
  var windowWidth = window.innerWidth;
  var headerRight = $('.header__right');
  var headerRightSp =$('#header__list');
  if (windowWidth > 1279) {
    headerRight.css('display','block');
    headerRightSp.css('display','none');
  } else if(windowWidth>719){
    headerRightSp.css('display','block');
    headerRight.css('display','none');
  }else{
    headerRight.css('display','none')
  }
});