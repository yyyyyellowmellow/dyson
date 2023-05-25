$(document).ready(function(){
  const $header = $('header'),
        $headerHeight = $header.outerHeight()
  let   $subHeight = $(this).find("ul").outerHeight()

  $("nav div").hover(function(){
    $(this).find("ul").css("opacity",1)
    $header.stop().animate({height:$headerHeight+$subHeight +"px"},300)
  },function(){
    $(this).find("ul").css("opacity",0)
    $header.stop().animate({height:$headerHeight},200)
  })
  // 메인 메뉴를 호버했을때  
  // 태블릿용 메뉴 버튼을 클릭하면 전체 화면 메뉴가 나오도록
  $(".tmclick").click(function(){
    $(".tmport").fadeIn()
  })
  $(".tmport button").click(function(){
    $(".tmport").fadeOut()
  })

  $("ul.mslide").bxSlider({
    mode: 'fade',
    auto: true,
    controls:true    
  })
  AOS.init();
  // 이 문서에서 AOS 사용할수 있게 기본적으로 깔아놓은상태임  
  $(".bxcover ul").bxSlider({
    maxSlides:4,
    minSlides:2,
    moveSlides:1,
    slideWidth:300,
    slideMargin:25,
    auto:true,
    pause:3000,
    controls:false,
    pager:false
  })

  $(window).scroll(function(){
    // 스크롤 위치가 특정값이 되었을때, 탑버튼이 보이거나
    // 보이지 않도록 설정.
    if($(this).scrollTop()>900){
      $(".topbtn").fadeIn()
    } else{
      $(".topbtn").fadeOut()
    }
  })
  $(".topbtn").click(function(){
    /* $("html,body").scrollTop(0) 
    // animation이 보이지 않고 바로 올라가게 함 */
    $('html,body').animate({
      scrollTop:0 //문서의 최상단
      // scrollTop:$(document).height()//문서의 최하단\
              // 문서의 세로 값
    })
  })
  // scrollTop() : 메서드 - 스크롤 바의 윗부분
  // scrollTop :css속성 - 스크롤 영역의 윗부분
})