$(function() {

  $(".sidebar-menu li").click(function(){
    $(".sidebar-menu li").removeClass("active");
    $(this).addClass("active");
  });

  $(".main-heading").animated("fadeInDown", "fadeOutUp");
  $(".coctails-wrap .coctails").animated("fadeInLeft", "fadeOutLeft");
	$(".coctails-wrap .tablets").animated("fadeInRight", "fadeOutRight");
  $(".offer span").animated("fadeIn", "fadeOut");



});
