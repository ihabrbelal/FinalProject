// test the js and jquery link
// $(document).ready(function() {
//     console.log("hello");
//     alert("hello");

// });

// $(document).ready(function() {
var shopCart = [];

$(document).ready(function() {
    outputCart();



    // when add to cart button clicked
    $(document).on("click", ".add-to-cart", function(e) {
        e.preventDefault();
        var itemInfo = $(this.dataset)[0];
        itemInfo.qty = 1;
        itemInCart = false;

        // loop thru the shopCart array to add change the quantity
        $.each(shopCart, function(index, value) {
            if (value.id === itemInfo.id) {
                value.qty = parseInt(value.qty) + parseInt(itemInfo.qty);
                itemInCart = true;
                // console.log(index + ' ' + value.qty);
            }
        })
        if (itemInCart === false) {
            shopCart.push(itemInfo);
        }
        sessionStorage["cartStore"] = JSON.stringify(shopCart);
        outputCart();


        // $(".add-to-cart").click(function() {
        // console.log($(this).data("price"));
        // console.log($(this).data("name"));
        // console.log($(this));
    });

    function outputCart() {
        if (sessionStorage["cartStore"] != null) {
            $(".cartimg").attr("src", "/images/fullCart.png");
            $(".cartInfo").show();

            shopCart = JSON.parse(sessionStorage["cartStore"].toString());
        }

        console.log(sessionStorage["cartStore"]);

        var holderHTML = '';
        var total = 0;
        var totalqty = 0;
        $.each(shopCart, function(index, value) {
            console.log(value.price);
            var stotal = value.qty * value.price;
            totalqty += parseInt(value.qty);
            value.total = total;
            total += stotal;
            holderHTML += '<tr><td>' + value.name + '</td><td>' + value.qty + '</td><td> $' + decimal(value.price) + '</td><td> $' + decimal(stotal) + '</td></tr>';
        })
        $(".cartqty").html(totalqty);
        // holderHTML += '<div> Your total is: $' + decimal(total) + '</div>';
        $('#output').html(holderHTML)
        $('#checkoutTotal').html('$' + decimal(total));
        $(".carttotal").html('$' + decimal(total));


    }

    function decimal(n) {
        return (n / 1).toFixed(2)
    }

});
