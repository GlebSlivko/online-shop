
const products = [
    {img: 'dist/img/furniture/furniture1.png'},
    {img: 'dist/img/furniture/furniture2.png'},
    {img: 'dist/img/furniture/furniture3.png'},
    {img: 'dist/img/furniture/furniture4.png'},
    {img: 'dist/img/furniture/furniture5.png'},
    {img: 'dist/img/furniture/furniture6.png'},
    {img: 'dist/img/furniture/furniture7.png'},
    {img: 'dist/img/furniture/furniture8.png'},
    {img: 'dist/img/furniture/furniture9.png'},
    {img: 'dist/img/furniture/furniture10.png'},
    {img: 'dist/img/furniture/furniture11.png'},
    {img: 'dist/img/furniture/furniture12.png'},
    {img: 'dist/img/furniture/furniture13.png'},
    {img: 'dist/img/furniture/furniture14.png'},
    {img: 'dist/img/furniture/furniture15.png'},
    {img: 'dist/img/furniture/furniture16.png'},
    {img: 'dist/img/furniture/furniture17.png'},
    {img: 'dist/img/furniture/furniture18.png'}
];

$(".add-to-card").on("click", event => {
    event.preventDefault();
    $('#myModal .empty-cart-title').remove();
    $('#myModal .empty-cart-slogan').remove();
    $('#cartFooter').removeClass("cart-modal-footer-hide");
    let $target = event.target;
    let $productId = $($target).attr("data-id");
    addProduct($productId);
});

function addProduct(productId) {
    $('#cartContainer').append(
        `<div class="cart-modal-product border rounded mx-md-3 mx-xl-5">
\t\t\t\t\t\t\t\t\t\t\t<div class="row no-gutters d-flex h-100 m-0 my-3 justify-content-between justify-content-md-start">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 col-md-4 col-xl-3 h-xl-100 text-center">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="cart-modal-product-img">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class="h-100" src=${products[productId].img} alt="products">
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 col-xl-3 h-xl-100 text-center text-md-left">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="cart-modal-product-title">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class="cart-modal-product-title-text text-left">Sunbaby Magic Chair</h4>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-12 col-md-9 col-xl-3 d-flex align-items-center justify-content-start p-0">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="cart-modal-product-prices d-flex flex-column justify-content-between text-left flex-md-row">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="cart-modal-product-price-last text-lg-center"><s>$350.00</s></span>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="cart-modal-product-price text-center text-white">$250.00</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-12 col-md-8 offset-md-4 col-xl-6 offset-xl-0">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="row no-gutters  mx-4 mx-md-0 pt-xl-4">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="cart-modal-product-quantity-wrapper col-6 col-xl-6 d-flex flex-column my-3 mb-md-0 my-xl-0 flex-md-row">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="cart-modal-product-quantity-text mr-3 my-3 my-md-2">Quantity:</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="d-flex align-items-center">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class="cart-modal-product-quantity-block bg-white text-center" maxlength="2" value="1">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="cart-modal-product-btn ml-2 text-decoration-none border">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-minus"></i>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="cart-modal-product-btn ml-2 text-decoration-none border">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-plus"></i>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 col-xl-6 d-flex flex-column justify-content-center align-items-center">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="cart-modal-product-sum mb-3">Sum</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="cart-modal-product-sum-figure">$250.00</span>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>`)
};
