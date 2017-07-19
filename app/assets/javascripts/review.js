$(function(){
  var average_width = gon.average_rate + '%';
  $('.contents__review__total__avarage__front').css("width", average_width);

  var five_width = gon.histogram_5 + '%';
  var four_width = gon.histogram_4 + '%';
  var three_width = gon.histogram_3 + '%';
  var two_width = gon.histogram_2 + '%';
  var one_width = gon.histogram_1 + '%';
  $('.contents__review__histogram__meter__5').css("width", five_width);
  $('.contents__review__histogram__meter__4').css("width", four_width);
  $('.contents__review__histogram__meter__3').css("width", three_width);
  $('.contents__review__histogram__meter__2').css("width", two_width);
  $('.contents__review__histogram__meter__1').css("width", one_width);
});
