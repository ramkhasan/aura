// Плавная прокрутка до якоря меню
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
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

// Гамбургер-меню
// Трансформируем 4 полоски в крестик
const elem = document.getElementById("hamburger");

const toggle = (e) => {
  const className = ` ${hamburger.className} `;
  if (className.includes(" open ")) {
    e.currentTarget.className = className.replace(" open ", " ");
  } else {
    e.currentTarget.className += " open";
  }
};

elem.addEventListener("click", toggle);

// Открываем и закрываем меню при клике на гамбургер
const menu = document.querySelector(".header-mob__menu");
elem.addEventListener("click", function () {
  menu.classList.toggle("active");
});
// Открываем и закрываем меню при клике на пункт меню
$(".header-mob__menu-link").on("click", function () {
  menu.classList.toggle("active");
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
