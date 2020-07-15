// Прелодер
$(window).on("load", function () {
  var $preloader = $("#preloader"),
    $loader = $preloader.find("#loader");
  $loader.fadeOut();
  $preloader.delay(500).fadeOut("slow");
});

// Показать/скрыть карточки товаров
var areCardsShown = false;
$(".btn-toggle-cards").on("click", function () {
  if (areCardsShown) {
    // Скрываем карточки товаров
    $(".flip-container.card-toggle").removeClass("show");
    $(this).text("Посмотреть ещё");
  } else {
    // Показываем карточки товаров
    $(".flip-container.card-toggle").addClass("show");
    $(this).text("Скрыть");
  }
  areCardsShown = !areCardsShown;
});

//Меню на мобильных устройствах
// полноэкранное мобильное меню
$(".nav__trigger").on("click", function (e) {
  e.preventDefault(); // предотвращаем поведение по умолчанию
  $(this).parent().toggleClass("nav--active").show(); //добавляем класс nav--active к nav icon
  $(".nav__trigger").toggleClass("nav__trigger--active"); //добавляем класс nav__trigger--active к nav nav__trigger
  $("body").toggleClass("no-scroll"); //отключаем прокрутку за навигацией
});
// нажатие на ссылку закрывает меню и включает прокрутку тела
$(".nav li a").on("click", function () {
  $(".nav__trigger").removeClass("nav__trigger--active");
  $(".nav__trigger").parent().removeClass("nav--active");
  $(".nav__icon").removeClass("nav--active");
  $("body").removeClass("no-scroll");
});
// плавная прокрутка до якоря меню
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

// Кнопка плавной прокрутки вверх
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });
  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});
