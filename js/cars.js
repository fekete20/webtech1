jQuery(document).ready(function () {
    jQuery.getJSON('manufacturerNames', function (data) {
        var select = jQuery('<select id="selector"></select>');
        var optionAll = jQuery('<option value="all">All</option>');
        select.append(optionAll);
        jQuery.each(data, function (key, value) {
            var option = jQuery('<option value="' + value + '">' + value + '</option>');
            select.append(option);
        });
        jQuery(".select").append(select);
    });
});

function list() {
    jQuery("table").remove();
    var element = document.getElementById("selector");
    var selectorValue = element.options[element.selectedIndex].value;
    document.cookie = 'name=' + selectorValue;
    if(selectorValue === 'all') {
        jQuery.getJSON('cars', function (data) {
            lister(data);
        });
    } else {
        jQuery.getJSON('/manufacturer', function (data) {
            lister(data);
        });
    }
}

function lister(data) {
    var table = jQuery('<table id="tables"></table>'); // table id=????? css stílus?
    table.append(
        "<tr>" +
        "<th id='th'>Name</th>" +
        "<th id='th'>Consumption</th>" +
        "<th id='th'>Color</th>" +
        "<th id='th'>Manufacturer</th>" +
        "<th id='th'>Available</th>" +
        "<th id='th'>Year</th>" +
        "<th id='th'>Horsepower</th>" +
        "</tr>"
    );

    jQuery.each(data, function (key, value) {
        var row = jQuery('<tr></tr>');
        var nameCell = jQuery('<td id="td">' + value.name + '</td>');
        var consumptionCell = jQuery('<td id="td">' + value.consumption + '</td>');
        var colorCell = jQuery('<td id="td">' + value.color + '</td>');
        var manufacturerCell = jQuery('<td id="td">' + value.manufacturer + '</td>');
        var availableCell = jQuery('<td id="td">' + value.available + '</td>');
        var yearCell = jQuery('<td id="td">' + value.year + '</td>');
        var horsepowerCell = jQuery('<td id="td">' + value.horsepower + '</td>');

        row.append(nameCell);
        row.append(consumptionCell);
        row.append(colorCell);
        row.append(manufacturerCell);
        row.append(availableCell);
        row.append(yearCell);
        row.append(horsepowerCell);

        table.append(row);

    });

    jQuery(".carlist").append(table);


}