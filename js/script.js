$(document).ready(function () {
  AOS.init(); //aos 호출

  // sec-2 영역, 번호 누르면 left 이미지 변경, right 설명 변경
  $(".sec-2 .right-content li").click(function () {
    var detail = $(this).attr("data-alt");
    $(`#${detail}`).siblings().removeClass("active");
    $(`#${detail}`).addClass("active");
  });

  // 제품 이름, 설명 변경
  $(".sec-2 .right-content li").click(function () {
    var detail = $(this).attr("data-tab");
    $(`#${detail}`).siblings().removeClass("active");
    $(`#${detail}`).addClass("active");
  });

  // 번호 클릭시 배경이미지 변경
  $(".sec-2 .right-content li").click(function () {
    let changeBg = $(this).attr("data-image");
    $(".sec-2 .left-content").css({
      "background-image": `url(${changeBg})`,
    });
  });

  // sec-1에 닿을때 line svg가 그려지도록
  const sec1 = $(".sec-1").offset().top;

  //  scrollTop: sct, if문 사용
  $(window).scroll(function () {
    const sct = $(window).scrollTop();

    if (sct >= sec1) {
      $(".line .st0").addClass("draw");
    } else {
    }
  });
});
