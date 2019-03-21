// Toggle menu
$(".menu-toggler").click(function() {
    $("body").toggleClass("sidebar-closed");
});

// Toggle menu
$(".menu-item > a, .submenu-item > a").click(function() {
    $(this).parent().siblings().removeClass("open");
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
});
$(".has-submenu > a").click(function() {
    $(this).parent().siblings().removeClass("open");
    $(this).parent().toggleClass("open");
});

$(document).ready(function() {
    var submenuItemsHeight = $(".submenu-items").height() + "px";
    $(".submenu-items").attr("style", `--submenuItemsHeight: ${submenuItemsHeight}`);
    $(".submenu-items").addClass("ready");
});

// function slideToggle(el) {
//     // The following 2 lines are ONLY needed if you ever want to start in a 'open' state. Due to the way browsers
//     // work it needs a double of this (or something like console.log(el.scrollHeight);) to prevent the render skipping
//     el.style.height = el.scrollHeight + 'px';
//     el.scrollHeight = el.scrollHeight; // Something like console.log(el.scrollHeight); also works, just something to prevent render skipping

//     el.classList.toggle('open');
//     el.style.height = el.classList.contains('submenu-items') ? el.scrollHeight + 'px' : 0;
// }

// Toggle dropdown
$('.dropdown-toggle').click(function(e){
    e.preventDefault()
    $(this).parent('.dropdown').toggleClass('open');
});