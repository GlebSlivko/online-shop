
const productsFurnitureGallery = [
    {img: 'dist/img/furniture/furniture10.png'},
    {img: 'dist/img/furniture/furniture11.png'},
    {img: 'dist/img/furniture/furniture12.png'},
    {img: 'dist/img/furniture/furniture13.png'},
    {img: 'dist/img/furniture/furniture14.png'},
    {img: 'dist/img/furniture/furniture15.png'}
];

$(".furniture-gallery-quick-view").on("click", event => {
    event.preventDefault();
    let $target = event.target.closest("A");
    let $productId = $($target).attr("data-prId");
    addFGProduct($productId);
});

function addFGProduct($productId) {
    $("#productsModal .modal-body-img").html( `<img class=\"position-relative\" src=${productsFurnitureGallery[$productId].img} alt=\"\">`)
};
