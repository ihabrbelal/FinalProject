// test the js and jquery link
// $(document).ready(function() {
//     console.log("hello");
//     alert("hello");

// });

var queryURL = "";
var cameras = "projectors";
// "/api/ourproducts";
$(document).ready(function() {
    queryURL = "/api/ourproducts";
    $('#productsHolder').empty();
    displyProducts();
});

// filter the data by 
$(document).ready(function() {

    $(".cat").click(function() {
        $("#catTitle").html($(this).data("category").toUpperCase());
        queryURL = "/api/ourproducts/" + $(this).data("category");
        $('#productsHolder').empty();
        displyProducts();
    });
})

// search by keyword
$(document).ready(function() {

    $("form").on("submit", function(e) {
        e.preventDefault();
        var keyword = $(".tftextinput").val();
        console.log(keyword);
        // $("#catTitle").html($(this).data("category").toUpperCase());
        queryURL = "/api/ourproducts/search/" + keyword;
        $('#productsHolder').empty();
        displyProducts();
    });
})

var displyProducts = function() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // console.log(queryURL);
        // var results = response.data;
        // console.log(response);
        // console.log($('#productsHolder'));

        for (var i = 0; i < response.length; i++) {


            var productDiv = $("<div class ='productHolder thumbnail hero-feature view effect'>");
            var productCaption = $("<div>");
            var beatormatch = $("<div style= 'float:left; width:60px; margin-left:20px;'>")
            var productImage = $("<img class='img-fluid'>");
            productImage.attr("alt", response[i].product_name);

            // check if there is image for the product, if not shoe default image
            if (response[i].image) {
                productImage.attr("src", response[i].image);
            } else {
                productImage.attr("src", "/images/noimage.jpg");

            }
            productImage.addClass('productImage');

            var id = response[i].id;
            var name = response[i].product_name;
            var desc = response[i].product_desc;
            var price = parseFloat(response[i].price).toFixed(2);
            var amazonPrice = response[i].amazonPrice;
            var upc = response[i].upc;
            if (price > amazonPrice) {
                price = amazonPrice;

            }
            var compAmazon = response[i].amazonPrice * 100;
            var compPrice = response[i].price * 100;
            // console.log("compAmazon: ", compAmazon);
            // console.log("compPrice: ", compPrice);



            productCaption.append("<h3>" + name + "</h3>");
            productCaption.append("<div class ='desc'>" + "<p>" + desc + "</p>" + "</div");
            productCaption.append("<p>" + "<div class ='amazon'>" + "Amazon Price $ " + amazonPrice + "</div>" + " </p>");
            productCaption.append("<p>" + "<div class='ourPrice'>" + "Our Price: $ " + price + "</a>");
            productCaption.append("<p>" + "<a class='add-to-cart btn btn-primary' data-name='" + name + "' data-price= '" + price + "' data-id= '" + id + "'>" + "Add to Cart" + "</a>");
            // Add data attr 


            productDiv.append(beatormatch);
            productDiv.append(productImage);
            productDiv.append(productCaption);
            $('#productsHolder').append(productDiv);

            // compare amazon price and our price based on dom info

            if (price === amazonPrice) {
                beatormatch.append("<img src='images/match.png' class='img-fluid'></img>");
            } else if (price < amazonPrice) {
                beatormatch.append("<img src='images/beatOrMatchIcons.png'></img>");
            };

            // compare amazon price and our price based on the mysql table

            // if (compPrice === compAmazon) {
            //     beatormatch.append("<img src='images/match.png' class='img-fluid'></img>");
            // } else if (compPrice < compAmazon) {
            //     beatormatch.append("<img src='images/beatOrMatchIcons.png'></img>");
            // };


        }


    });
}
