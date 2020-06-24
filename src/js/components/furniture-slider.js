const $allIndicators0 = $("#indicators-carousel0 .furniture-gallery-slider-indicator");
let $activeIndicator0 = $(".active-indicator0");

$allIndicators0.on("click", event => {
    const $target = event.target.closest("li");
    changeSlide0($target);
});
function changeSlide0(indicatorX) {
    if ($activeIndicator0 === indicatorX) {
        return false
    } else {
        $(".active-indicator0").removeClass("active-indicator0");
        $activeIndicator0 = indicatorX;
        $($activeIndicator0).addClass("active-indicator0");
        $(".not-active-indicator0").removeClass("not-active-indicator0");
        let slideToHide = ($allIndicators0.index($(".active-indicator0")) - 1 + $allIndicators0.length) % $allIndicators0.length;
        $($allIndicators0[slideToHide]).addClass("not-active-indicator0");
    }
};

let slideIndicator0;
$("#carousel0-prev").on("click", () => {
    slideIndicator0 = $allIndicators0.index($(".active-indicator0"));
    moveSlide0(slideIndicator0 - 1);
});

$("#carousel0-next").on("click", () => {
    slideIndicator0 = $allIndicators0.index($(".active-indicator0"));
    moveSlide0(slideIndicator0 + 1);
});

function moveSlide0(index) {
    $($allIndicators0[slideIndicator0]).removeClass("active-indicator0");
    slideIndicator0 = (index + $allIndicators0.length) % $allIndicators0.length;
    $($allIndicators0[slideIndicator0]).addClass("active-indicator0");
    $(".not-active-indicator0").removeClass("not-active-indicator0");
    let slideToHide = (index - 1 + $allIndicators0.length) % $allIndicators0.length;
    $($allIndicators0[slideToHide]).addClass("not-active-indicator0");
}


const $allIndicators1 = $("#indicators-carousel1 .furniture-gallery-slider-indicator");
let $activeIndicator1 = $(".active-indicator1");

$allIndicators1.on("click", event => {
    const $target = event.target.closest("li");
    changeSlide1($target);
});
function changeSlide1(indicatorX) {
    if ($activeIndicator1 === indicatorX) {
        return false
    } else {
        $(".active-indicator1").removeClass("active-indicator1");
        $activeIndicator1 = indicatorX;
        $($activeIndicator1).addClass("active-indicator1");
        $(".not-active-indicator1").removeClass("not-active-indicator1");
        let slideToHide = ($allIndicators1.index($(".active-indicator1")) - 1 + $allIndicators1.length) % $allIndicators1.length;
        $($allIndicators1[slideToHide]).addClass("not-active-indicator1");
    }
};

let slideIndicator1;
$("#carousel1-prev").on("click", () => {
    slideIndicator1 = $allIndicators1.index($(".active-indicator1"));
    moveSlide1(slideIndicator1 - 1);
});

$("#carousel1-next").on("click", () => {
    slideIndicator1 = $allIndicators1.index($(".active-indicator1"));
    moveSlide1(slideIndicator1 + 1);
});

function moveSlide1(index) {
    $($allIndicators1[slideIndicator1]).removeClass("active-indicator1");
    slideIndicator1 = (index + $allIndicators1.length) % $allIndicators1.length;
    $($allIndicators1[slideIndicator1]).addClass("active-indicator1");
    $(".not-active-indicator1").removeClass("not-active-indicator1");
    let slideToHide = (index - 1 + $allIndicators1.length) % $allIndicators1.length;
    $($allIndicators1[slideToHide]).addClass("not-active-indicator1");
}


const $allIndicators2 = $("#indicators-carousel2 .furniture-gallery-slider-indicator");
let $activeIndicator2 = $(".active-indicator2");

$allIndicators2.on("click", event => {
    const $target = event.target.closest("li");
    changeSlide2($target);
});
function changeSlide2(indicatorX) {
    if ($activeIndicator2 === indicatorX) {
        return false
    } else {
        $(".active-indicator2").removeClass("active-indicator2");
        $activeIndicator2 = indicatorX;
        $($activeIndicator2).addClass("active-indicator2");
        $(".not-active-indicator2").removeClass("not-active-indicator2");
        let slideToHide = ($allIndicators2.index($(".active-indicator2")) - 1 + $allIndicators2.length) % $allIndicators2.length;
        $($allIndicators2[slideToHide]).addClass("not-active-indicator2");
    }
};

let slideIndicator2;
$("#carousel2-prev").on("click", () => {
    slideIndicator2 = $allIndicators2.index($(".active-indicator2"));
    moveSlide2(slideIndicator2 - 1);
});

$("#carousel2-next").on("click", () => {
    slideIndicator2 = $allIndicators2.index($(".active-indicator2"));
    moveSlide2(slideIndicator2 + 1);
});

function moveSlide2(index) {
    $($allIndicators2[slideIndicator2]).removeClass("active-indicator2");
    slideIndicator2 = (index + $allIndicators2.length) % $allIndicators2.length;
    $($allIndicators2[slideIndicator2]).addClass("active-indicator2");
    $(".not-active-indicator2").removeClass("not-active-indicator2");
    let slideToHide = (index - 1 + $allIndicators2.length) % $allIndicators2.length;
    $($allIndicators2[slideToHide]).addClass("not-active-indicator2");
}


const $allIndicators3 = $("#indicators-carousel3 .furniture-gallery-slider-indicator");
let $activeIndicator3 = $(".active-indicator3");
console.log($allIndicators3);
$allIndicators3.on("click", event => {
    const $target = event.target.closest("li");
    changeSlide3($target);
});
function changeSlide3(indicatorX) {
    if ($activeIndicator3 === indicatorX) {
        return false
    } else {
        $(".active-indicator3").removeClass("active-indicator3");
        $activeIndicator3 = indicatorX;
        $($activeIndicator3).addClass("active-indicator3");
        $(".not-active-indicator3").removeClass("not-active-indicator3");
        let slideToHide = ($allIndicators3.index($(".active-indicator3")) - 1 + $allIndicators3.length) % $allIndicators3.length;
        $($allIndicators3[slideToHide]).addClass("not-active-indicator3");
    }
};

let slideIndicator3;
$("#carousel3-prev").on("click", () => {
    slideIndicator3 = $allIndicators3.index($(".active-indicator3"));
    moveSlide3(slideIndicator3 - 1);
});

$("#carousel3-next").on("click", () => {
    slideIndicator3 = $allIndicators3.index($(".active-indicator3"));
    moveSlide3(slideIndicator3 + 1);
});

function moveSlide3(index) {
    $($allIndicators3[slideIndicator3]).removeClass("active-indicator3");
    slideIndicator3 = (index + $allIndicators3.length) % $allIndicators3.length;
    $($allIndicators3[slideIndicator3]).addClass("active-indicator3");
    $(".not-active-indicator3").removeClass("not-active-indicator3");
    let slideToHide = (index - 1 + $allIndicators3.length) % $allIndicators3.length;
    $($allIndicators3[slideToHide]).addClass("not-active-indicator3");
}
