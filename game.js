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
arr[1][4] = true;
arr[2][8] = true;
arr[3][7] = true;
arr[4][6] = true;
arr[5][6] = true;
arr[6][9] = true;
arr[0][9] = true;
arr[1][8] = true;
arr[8][4] = true;
arr[8][8] = true;
arr[9][7] = true;
arr[7][6] = true;
arr[9][6] = true;
arr[9][9] = true;
function createTable(arr) {
	$('tr').remove();
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
}
createTable(arr);

$('td').on('click', function(e) {
	$(this).toggleClass('alive');
	e.preventDefault();
	var myClasses = this.classList;
	var thisX = myClasses[0].substring(1);
	var thisY = myClasses[1].substring(1);
	if (arr[(thisX, thisY)]) {
		arr[(thisX, thisY)] = false;
	} else arr[(thisX, thisY)] = true;
});

var k = 0;
setInterval(function() {
	k++;
	if (k < 3) {
		for (var i = 0; i < x; i++) {
			for (var j = 0; j < y; j++) {
				var cssClass = arr[i][j];

				arr[i][j] = !cssClass;
			}
		}
		createTable(arr);
	}
}, 2000);
