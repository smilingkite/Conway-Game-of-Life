var x = 10;
var y = 10;

for (var i = 1; i <= x + 1; i++) {
	$('tbody').append('<tr></tr>');
}
for (var i = 1; i <= y + 1; i++) {
	$('tr').append('<td></td>');
}

$('td').on('click', function(e) {
	$(this).toggleClass('alive'); //you can list several class names
	e.preventDefault();
});
