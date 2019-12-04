jQuery(document).ready(function () {
    document.querySelector("#date_field").value = new Date().toISOString().substr(0, 10);
});

jQuery(function () {
    jQuery('form').on('submit', function (submit) {
        submit.preventDefault();
        jQuery.ajax( { type: 'post', url: 'addManufacturers', data: jQuery('form').serialize(), success: function () {
                if (confirm("Manufacturer added.")) {
                    jQuery("#content").load("manufacturers.html");
                }
            },
            error: function () {
                window.alert("Failed :(");
            }

            })
    })
});
