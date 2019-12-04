jQuery(document).ready(function () {
    jQuery.getJSON('manufacturers', function (data) {
        var table = jQuery('<table id="tables"></table>');
        table.append(
            "<tr>" +
            "<th id='th'>Name</th>" +
            "<th id='th'>Country</th>" +
            "<th id='th'>Founded</th>" +
            "</tr>"

        );
        jQuery.each(data, function (key, value) {
            var row = jQuery('<tr></tr>');
            var nameCell = jQuery('<td id="td">' + value.name + '</td>');
            var countryCell = jQuery('<td id="td">' + value.country + '</td>');
            var foundedCell = jQuery('<td id="td">' + value.founded + '</td>');

            row.append(nameCell);
            row.append(countryCell);
            row.append(foundedCell);
            table.append(row);

        });
        jQuery(".list").append(table);
    });
});