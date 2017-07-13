// test the js and jquery link
// $(document).ready(function() {
//     console.log("hello");
//     alert("hello");

// });

// $(document).ready(function() {
$(document).on("click", ".add-to-cart", function() {
    var iteminfo = $(this.dataset)[0];


    // $(".add-to-cart").click(function() {
    // e.preventDefault();
    console.log(iteminfo);
    console.log($(this).data("price"));
    console.log($(this).data("name"));
    // console.log($(this));
});
