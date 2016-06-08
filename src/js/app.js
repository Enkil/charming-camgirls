window.$ = window.jQuery =  require('jquery');
window.inputmask =          require('jquery.inputmask');
window.validate =           require('jquery-validation');
window.slick =              require('./vendor/bower/slick');

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


    //// Reviews slider

    // Animate reviews chart
    function slideChartAnimate (event, slide){
        $(slide).find('.chart').each(function () {
            var _this = $(this);
            var chartHeight = _this.data('height');
            _this.css('height', chartHeight);
        });
    }
    // Animate reviews salary
    function slideSalaryAnimate (event, slide){
        $(slide).find('span.num').each(function () {
            var _this = $(this);
            var salary = _this.data('salary');
            var currentNumber = _this.text();

            $({numberValue: currentNumber}).animate({numberValue: salary}, {
                duration: 1500,
                easing: 'swing',
                step: function() {
                    _this.text(Math.ceil(this.numberValue));
                }
            });


        });
    }

    var reviewsSlider = $('#js-reviews-slider');

    // Animate data on init for thirst slide
    reviewsSlider.on('init', function(event, slick){
        var currSlide = $(slick.$slides.get([0]));

        currSlide.bind('chartAnimate', slideChartAnimate(event,currSlide));
        currSlide.trigger('chartAnimate');

        currSlide.bind('salaryAnimate', slideSalaryAnimate(event,currSlide));
        currSlide.trigger('salaryAnimate');

    });
    // Animate data on change slide for current slide
    reviewsSlider.on('afterChange', function(event, slick, currentSlide){
        var currSlide = $(slick.$slides.get(currentSlide));

        currSlide.bind('chartAnimate', slideChartAnimate(event, currSlide));
        currSlide.trigger('chartAnimate');

        currSlide.bind('salaryAnimate', slideSalaryAnimate(event, currSlide));
        currSlide.trigger('salaryAnimate');

    });

    reviewsSlider.slick({
        dots: false,
        fade: false,
        autoplay: false,
        slidesToShow: 1
    });

});