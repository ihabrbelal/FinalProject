$(document).ready(function() {
    console.log('Loaded script');

    $('#send-email').on('click', function(event) {
        event.preventDefault();

        console.log('Clicked Send button');

        var name = $('#form-name').val().trim();
        var email = $('#form-email').val().trim();
        var message = $('#form-message').val().trim();

        console.log(name, email, message);

        $.ajax({
            url: "https://formspree.io/ihabali@live.com",
            method: "POST",
            data: {
                name: name,
                email: email,
                message: message
            },
            dataType: "json",
            success: function(data) {
                console.log(data);
                $('#form-name').val('');
                $('#form-email').val('');
                $('#form-message').val('');

                // $('#success-message').append('<p>Message Sent</p>')
                $(alert("message sent, we will contact you shortly .. Thank you"));
            }
        });
    });
});
