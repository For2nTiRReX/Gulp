/*
 * jQuery
 */


(function($) { 
$(document).ready(function() {
  
/*Плавный скрол */
      
$('a[href^="#"]').on('click', function (event) {
  console.log($(this));
  event.preventDefault();
  var id  = $(this).attr('href');
  var top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 900);
});

//Animate css
 $.fn.animated = function(inEffect) {
    $(this).each(function() {
        var ths = $(this);
        ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                ths.addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: "80%"
        });

    });
};

$(".section-title").animated("flipInY");


/*устанавливаем найденное максимальное значение
 высоты для каждого блока jQuery выборки */

$.fn.equivalent = function (){ 
//запишем значение jQuery выборки к которой будет применена эта функция в локальную переменную $blocks 
var $blocks = $(this);
$blocks.css({"height": "initial"});
//примем за максимальную высоту - высоту первого блока в выборке и запишем ее в переменную maxH 
maxH = 0; 
//делаем сравнение высоты каждого блока с максимальной 
$blocks.each(function(){ 
maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH; 
}); 


$blocks.height(maxH); 
} 
$('').equivalent(); //Ваш блок	



});/*Document ready function*/
})(jQuery);/*jQueryFix*/