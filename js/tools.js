// navbar
$(".navbar-btn").click(function(){
  $(".navbar-collapse").toggleClass("collapseSwhow")
})

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


