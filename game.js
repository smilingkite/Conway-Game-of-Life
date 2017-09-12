var x = 3;
var y = 3;

// array with dead squares (alive = false)
var arr = [];
for (var j = 0; j < y; j++) {
	arr.push([]);
	for (var i = 0; i < x; i++) {
		arr[j].push(false);
	}
}
arr[1][0] = true;
arr[1][1] = true;
arr[1][2] = true;
// arr[2][0] = true;
// arr[2][1] = true;
// arr[2][2] = true;
// arr[1][0] = true;
// arr[1][1] = true;
// arr[2][2] = true;
// arr[3][7] = true;
// arr[4][6] = true;
// arr[5][6] = true;
// arr[6][9] = true;
// arr[0][9] = true;
// arr[1][8] = true;
// arr[8][4] = true;
// arr[8][8] = true;
// arr[9][7] = true;
// arr[7][6] = true;
// arr[9][6] = true;
// arr[9][9] = true;
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

function countNeighbours(arr, i, j) {
	var counter = 0;
	for (var nI = i - 1; nI <= i + 1; nI++) {
		for (var nJ = j - 1; nJ <= j + 1; nJ++) {
			if (nI == i && nJ == j) {
				continue;
			} else if (nI >= 0 && nJ >= 0 && nJ < y && nI < x) {
				if (arr[nI][nJ]) {
					counter++;
				}
			}
		}
	}
	// console.log('x:', i, 'y: ', j, 'counter: ', counter);
	return counter;
}
var k = 0;
var arrNew = arr;
setInterval(function() {
	k++;
	if (k < 2) {
		for (var i = 0; i < x; i++) {
			for (var j = 0; j < y; j++) {
				var neighbours = countNeighbours(arr, i, j);
				console.log(neighbours);
				if (neighbours < 2 && arr[i][j]) {
					arrNew[i][j] = false;
				}
			}
		}
	}
	createTable(arrNew);
	arr = arrNew;
}, 2000);
