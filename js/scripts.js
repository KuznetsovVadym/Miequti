$(document).ready(function() {
  //Smooth Scroll for Anchors
  jQuery('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = jQuery(target);
    jQuery('html, body').stop().animate({
      'scrollTop': $target.offset().top - 64}, 700);
  });
  
$('.carousel-wrapper').slick({
    autoplay: true,
    dots: true,
});
    
    
    
    
    //Click events for view all btn
  $('#portfolio-view-all').on('click', function(){
     if ($('.hidden-row').hasClass('active')) {
         $('.hidden-row').removeClass('active');
         $(this).text('View More');
     } else {
         $('.hidden-row').addClass('active');
         $(this).text('View Less');

     }
  });
  //Example for styling with classes
  $('.plan-column').on('click', function(){
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
  });
  //Example for styling with css native
  $('.background-item').on('click', function(){
    $(this).css('border', '1px solid red');
  });

});