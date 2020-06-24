$(".top-menu-link").on("click", event => {
    event.preventDefault();
    const $target = event.target;
    $(".nav-item-active").toggleClass("nav-item-active");
    $($target).parent().toggleClass("nav-item-active");
    const $id  = $(event.target).attr('href');
    const $sectionTop = $($id).offset().top;
    $("body, html").animate({scrollTop: $sectionTop}, 1000);
});
