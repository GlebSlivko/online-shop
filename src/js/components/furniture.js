// Filter by category

const categoryFilter = document.querySelector(".filter-category");
const digitItems = Array.from(document.getElementsByClassName("digit"));

categoryFilter.addEventListener("click", (event) => {
    debugger;
    if(event.target.style.color !== "rgb(213, 142, 50)") {
        event.target.style.color = "rgb(213, 142, 50)";
    }else {
        event.target.style.color = "black";
    }
    digitItems.forEach(element => {
        debugger;
        if(element.dataset.content === event.target.dataset.content) {
            if(event.target.style.color !== "rgb(213, 142, 50)") {
                element.style.backgroundColor = "black";
            }else {
                element.style.backgroundColor = "rgb(213, 142, 50)";
            }
        }
    });
});


$(".button-upload").on("click", () => {
    $(".hidden").removeClass("hidden");
    $(".button-upload").remove();
});



$(function(){
    let $body = $("#productsModal .modal-body-img");

    $("#product1-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture1.png\" alt=\"\">");
    });

    $("#product2-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture2.png\" alt=\"\">");
    });
    $("#product3-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture3.png\" alt=\"\">");
    });
    $("#product4-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture4.png\" alt=\"\">");
    });
    $("#product5-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture5.png\" alt=\"\">");
    });
    $("#product6-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture6.png\" alt=\"\">");
    });
    $("#product7-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture7.png\" alt=\"\">");
    });
    $("#product8-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture8.png\" alt=\"\">");
    });
    $("#product9-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture9.png\" alt=\"\">");
    });
    $("#product10-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture10.png\" alt=\"\">");
    });
    $("#product11-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture11.png\" alt=\"\">");
    });
    $("#product12-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture12.png\" alt=\"\">");
    });
    $("#product13-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture13.png\" alt=\"\">");
    });
    $("#product14-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture14.png\" alt=\"\">");
    });
    $("#product15-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture15.png\" alt=\"\">");
    });
    $("#product16-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture16.png\" alt=\"\">");
    });
    $("#product17-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture17.png\" alt=\"\">");
    });
    $("#product18-btn").on("click", function() {
        $body.html("<img class=\"position-relative\" src=\"src/img/furniture/furniture18.png\" alt=\"\">");
    });
});

let tags = document.querySelectorAll(".filter-tag");

tags.forEach((element) => {
    element.addEventListener("click", (event) => {
        if (event.currentTarget.style.color !== "rgb(213, 142, 50)") {
            event.currentTarget.style.color = "rgb(213, 142, 50)";
            event.currentTarget.style.borderColor = "rgb(213, 142, 50)";
        } else {
            event.currentTarget.style.color = "darkgrey";
            event.currentTarget.style.borderColor = "darkgrey";
        }

    });
});

const rangeSlider = document.getElementById("range-slider");
const value1 = document.querySelector(".range-slider-value-first");
const value2 = document.querySelector(".range-slider-value-second");

rangeSlider.oninput = () => {
    value1.innerHTML = rangeSlider.valueLow;
    value2.innerHTML = rangeSlider.valueHigh;
};