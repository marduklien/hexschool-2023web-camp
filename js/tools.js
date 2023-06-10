// navbar
// 選取 DOM 元素賦予到變數上
const navbarBtn = document.querySelector('.navbar-btn')
const navbarCollapse = document.querySelector('.navbar-collapse')

// click 事件加上 class
navbarBtn.addEventListener('click', function() {
  navbarCollapse.classList.toggle('collapseShow')
})


/* 漢堡選單 切換icon*/
const mobileMenu = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", function () {
  navbar.classList.toggle("open");
});

// scroll to fixed-Top
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 5) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// toTop
$('.toTop').on('click', function () {
  $('html').animate({ scrollTop: 0 }, 1000)
})

// 篩選 開選單
$('.filter-btn').click(function(e) {
  $('.filter-menu').toggleClass('show');
});

// 篩選 check
$('.checkItem').click(function (e) {
  $(this).find(".check").toggleClass("show");
});

// 由新到舊 開選單
$('.dropdown-btn').click(function(e) {
  $('.dropdown-menu').toggleClass('show');
});

// 切換按鈕文字
$('.new-to-old').click(function(e) {
  e.preventDefault();
  $('.dropdown-menu').toggleClass('.show');
  $('.dropdown-btnText').text($('.new-to-old').text());
});

$('.old-to-new').click(function(e) {
  e.preventDefault();
  $('.dropdown-menu').toggleClass('.show');
  $('.dropdown-btnText').text($('.old-to-new').text());
});


// 頁數切換選單 
// https://www.w3schools.com/howto/howto_js_active_element.asp
// Get the container element
var btnContainer = document.getElementById("pageNav");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// 常見問題
// find 運用：https://www.w3schools.com/jquery/traversing_find.asp
// this：https://hsuchihting.github.io/jQuery/20200630/3070987172/
$(".qa-item").click(function (e) {
  $(this).toggleClass("active");
  $(this).find(".add-icon").toggleClass("d-none");
  $(this).find(".remove-icon").toggleClass("d-block");
  $(this).find(".collapse-content p").toggleClass("open");
});


