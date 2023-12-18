/*var delta = 2; // specify the delta you want
var initialImgScrollTop = $("img.header__img").offset().top; // get the current top position of your image
var initialImgScrollLeft = $("img.header__img").offset().left;
$("#body").scroll(function (event) {
  var st = $(this).scrollTop();
	$("img.header__img").animate({ top: initialImgScrollTop - st * delta }, 10); // compute the position your image should be
});

var scrollHeight = $('#div2').prop('scrollHeight') - $('#div2').innerHeight(); // get the scroll height
var initialMiddleScroll = scrollHeight / 2; // compute the middle scroll
$("#div2").scrollTop(initialMiddleScroll); // set the scroll to middle so you can go left and right
$("#div2").scroll(function (event) {
  var st = $(this).scrollTop();
	$("img.header__img").animate({ left: initialImgScrollLeft + (st - initialMiddleScroll) * delta }, 10); // compute the position your image should be
});
*/

function gotoelement(e_id) {
  document.getElementById('papa').scrollLeft = document.getElementById(e_id).offsetLeft - document.getElementById('papa').offsetLeft - document.getElementById('papa').clientLeft;
  return false;
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('animation__ship');
    }
  });
}
const options = { 
              rootMargin: "100% 0% 100% 0%",
              threshold: [0.5] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.ship__top');
for (const elm of elements) {
  observer.observe(elm);
}

function moveImage() {
    // Получаем положение скролла страницы
    const scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;
     
    // Получаем элементы картинки и контейнера
    const image = document.getElementById('i1');
    const container = document.getElementById('c1');
     
    // Задаем новые координаты картинки в зависимости от положения скролла
    const newX = -scrollLeft / 1.5;
    const newY = -scrollLeft / 15;
     
    // Устанавливаем новые координаты для картинки
    image.style.transform = `translate(${newX}px, ${newY}px)`;
    /*console.log(scrollLeft)*/
}

// Вызываем функцию moveImage при прокрутке страницы
window.addEventListener('scroll', moveImage, { passive: false });
/*
function moveImageShipTop() {
  // Получаем положение скролла страницы
  const scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;
   
  // Получаем элементы картинки и контейнера
  const image = document.getElementById('i2');
  const container = document.getElementById('c2');
   
  // Задаем новые координаты картинки в зависимости от положения скролла
  const newX = -scrollLeft / 1.5;
  const newY = -scrollLeft / 15;
   
  // Устанавливаем новые координаты для картинки
  image.style.transform = `translate(${newX}px, ${newY}px)`;
  console.log(scrollLeft - 1)
}


// Вызываем функцию moveImage при прокрутке страницы
window.addEventListener('scroll', moveImageShipTop, { passive: false });*/
/*
$(function(){
	$nav = $('.header');
	$nav.css('width', $nav.outerWidth());
	$window = $(window);
	$h = $nav.offset().left;
	$window.scroll(function(){
		if ($window.scrollLeft > $h){
			$nav.addClass('fixed');
		} else {
			$nav.removeClass('fixed');
		}
	});
});
*/
