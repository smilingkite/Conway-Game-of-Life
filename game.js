var x = 1;
var y = 1;

// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
	console.log('sleep');
	return new Promise(resolve => setTimeout(resolve, ms));
}

// array with dead squares (alive = false)
var arr = [];
for (var j = 0; j < y; j++) {
	arr.push([]);
	for (var i = 0; i < x; i++) {
		arr[j].push(false);
	}
}
// arr[0][0] = true;
// arr[1][1] = true;
// console.log(arr);

function createTable(arr) {
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
	// console.log(thisX, thisY);
	if (arr[(thisX, thisY)]) {
		arr[(thisX, thisY)] = false;
	} else arr[(thisX, thisY)] = true;
});

var k = 0;
while (k < 2) {
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y; j++) {
			var cssClass = arr[i][j];

			arr[i][j] = !cssClass;
			console.log(cssClass);
		}
	}
	createTable(arr);
	// console.log('while loop', x);
	k++;
	// await sleep(20000);
}
