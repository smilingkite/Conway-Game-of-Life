var x = 10;
var y = 10;

// array with dead squares (alive = false)
var arr = [];
for (var j = 0; j < y; j++) {
	arr.push([]);
	for (var i = 0; i < x; i++) {
		arr[j].push(false);
	}
}
arr[0][0] = true;
arr[1][1] = true;
console.log(arr);

for (var i = 0; i < x; i++) {
	var tableRow = $('<tr></tr>').appendTo('tbody');
	for (var j = 0; j < y; j++) {
		var cssClass = arr[i][j];
		var tableCell = $('<td></td>');
		tableCell.addClass('x' + i).addClass('y' + j);
		if (cssClass) {
			tableCell.addClass('alive');
		}
		$(tableRow).append(tableCell);
	}
}

$('td').on('click', function(e) {
	$(this).toggleClass('alive');
	e.preventDefault();
	var myClasses = this.classList; // gives an array
	// console.log(myClasses);
	var thisX = myClasses[0].substring(1);
	var thisY = myClasses[1].substring(1);
	console.log(thisX, thisY);
	if (arr[(thisX, thisY)]) {
		arr[(thisX, thisY)] = false;
	} else arr[(thisX, thisY)] = true;
});
