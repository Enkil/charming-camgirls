window.$ = window.jQuery =  require('jquery');
window.inputmask =          require('jquery.inputmask');
window.validate =           require('jquery-validation');

$(document).ready(function() {

    // Mask input
    $('input[type="tel"]').inputmask({"mask": "+7(999)999-99-99", greedy: false});

    // Validate form
    // Form validation
    var form = $("form");
    $.validator.messages.required = '';
    form.each( function() {
        $(this).validate({
            errorClass: "-error",
            validClass: "-valid"
        });
    });

    // Form Ajax sending
    form.submit (function(event) {
        if (form.valid())
        {
            // $('.submission').hide();
            // $('.aftersubmit').show();

            $.ajax({
                type: form.attr("method"), // use method specified in form attributes
                url: form.attr("action"), // use action specified in form attributes
                data: form.serialize(), // encodes set of form elements as string for submission
                success: function(data) {
                    // get response from servlet and display on page via jQuery
                }
            });
        }
        event.preventDefault(); // stop form from redirecting to java servlet page
    });

});