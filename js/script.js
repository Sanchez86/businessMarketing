/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    //$(window).stellar();
    if(window.innerWidth<768){
        $('.navbar-default').addClass('active');
    }

    $(window).scroll(function(){
var topPosition=$('#parallax').position().top-$(window).height();
if($(window).scrollTop()>topPosition){
 var offset=($(window).scrollTop()-$(window).height()-topPosition)/$(window).height();
 if(innerWidth<=800){
    $('#parallax').css('background-position-y', offset*10+'px');
 }else{
    $('#parallax').css('background-position-y', offset*500+'px');
 }
 //console.log(offset);
}
});


    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

/* конец кнопка на верх*/
/*anhor contact*/
 $(".navbar-nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
		top = $(id).offset().top - 147;
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });
/*end anhor contact*/

/* tabs */
    $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    })
/* end tabs*/

var count =0;
var slideUp = 0;
var slideDown = 0;

$('.slideUp').on('click',function(){
	if(count<0){
		count+=92;
		$('#accordion').css('margin-top',count+'px');
        $(this).addClass('active');
        $('.slideDown').removeClass('active');
	}
})


$('.slideDown').on('click',function(){
	if($('#sub_accordion').height()>=400){
		count-=92;
		$('#accordion').css('margin-top',count+'px');
        $(this).addClass('active');
        $('.slideUp').removeClass('active');
	}
})








