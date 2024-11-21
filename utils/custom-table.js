(function($) {

    $.fn.initCustomTable = function(columns) {
        const container = this[0];
        $(container).data('columns', columns)

        const table = $('<table>').addClass('custom-table');
        const tableHeader = $('<thead>').appendTo(table);
        $('<tbody>').appendTo(table);

        if (columns.length > 0) {
            columns.forEach(column => {
                $('<th>').text(column.displayName).appendTo(tableHeader);
            });
        }
        else {
            console.error("Columns must be a non-empty array of column objects");
        }

        table.appendTo(container);
    }

    $.fn.setData = function(data) {
        const columns = $(this).data('columns');
        const tableBody = $(this).find('tbody');

        $(tableBody).empty();

        if (data.length > 0) {
            data.forEach(dataItem => {
                const row = $('<tr>');
                columns.forEach(column => {
                    $('<td>').text(dataItem[column.key]).appendTo(row);
                });
                row.appendTo(tableBody);
            });
        }
        else {
            console.error('Data should be a non-empty array of objects');
        }
    };

}(jQuery));