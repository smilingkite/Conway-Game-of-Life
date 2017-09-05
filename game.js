$('td').on('click', function(e) {
	$(this).toggleClass('selected'); //you can list several class names
	e.preventDefault();
});

function getTableData(table) {
	var data = [];
	table.find('tr').each(function(rowIndex, r) {
		var cols = [];
		$(this)
			.find('td')
			.each(function(colIndex, c) {
				cols.push(c.hasClass('selected'));
			});
		data.push(cols);
	});
	return data;
}

console.log(getTableData);
