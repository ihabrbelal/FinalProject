// test the js and jquery link
// $(document).ready(function() {
//     console.log("hello");
//     alert("hello");

// });

// $(document).ready(function() {
$(document).on("click", ".add-to-cart", function(e) {
    e.preventDefault();
    var shopCart = [];
    var iteminfo = $(this.dataset)[0];
    // iteminfo.qty = 1;

    shopCart.push(iteminfo);


    // $(".add-to-cart").click(function() {
    console.log(shopCart);
    // console.log($(this).data("price"));
    // console.log($(this).data("name"));
    // console.log($(this));
});
