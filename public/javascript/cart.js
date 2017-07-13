// test the js and jquery link
// $(document).ready(function() {
//     console.log("hello");
//     alert("hello");

// });

// $(document).ready(function() {
$(document).on("click", ".add-to-cart", function() {

    // $(".add-to-cart").click(function() {
    // e.preventDefault();
    console.log($(this).data("price"));
    console.log($(this).data("name"));
    // console.log($(this));
});
