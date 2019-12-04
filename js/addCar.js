jQuery(document).ready(function () {
    jQuery.getJSON("manufacturerNames", function (data) {
        var select = jQuery('<select name="manufacturer" required = "required"></select>');
        jQuery.each(data, function (key, value) {
            var option = jQuery('<option value="' + value + '">' + value + '</option>');
            select.append(option);
        });
        jQuery(".select").append(select);
    });
});

jQuery(function () {
    jQuery('form').on('submit', function (submit) {
        submit.preventDefault();

        jQuery.ajax( {
            type: 'post', url: 'addCar', data: jQuery('form').serialize(), success: function () {
                confirm("Car added.")

            },
            error: function () {
                window.alert("Add failed. :(")
            }
        })
    })
});