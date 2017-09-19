'use strict';
var x = 10;
var y = 10;

// array with dead squares (alive = false)
var arr = [];
for (let j = 0; j < y; j++) {
	arr.push([]);
	for (let i = 0; i < x; i++) {
		arr[j].push(false);
	}
}

arr[1][0] = true;
arr[1][1] = true;
arr[1][2] = true;

arr[0][7] = true;
arr[0][8] = true;
arr[1][7] = true;

arr[4][0] = true;
arr[4][1] = true;
arr[4][2] = true;
arr[5][0] = true;
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
	return counter;
}
var k = 0;
var arrNew = $.extend(true, {}, arr);
setInterval(function() {
	k++;
	if (k < 10) {
		for (let i = 0; i < x; i++) {
			for (let j = 0; j < y; j++) {
				let neighbours = countNeighbours(arr, i, j);
				console.log(neighbours);
				if (neighbours < 2 && arr[i][j]) {
					arrNew[i][j] = false;
				} else if (neighbours <= 3 && arr[i][j]) {
					arrNew[i][j] = true;
				} else if (neighbours > 3 && arr[i][j]) {
					arrNew[i][j] = false;
				} else if (neighbours === 3 && !arr[i][j]) {
					arrNew[i][j] = true;
				}
			}
		}
	}
	createTable(arrNew);
	arr = $.extend(true, {}, arrNew);
}, 2000);
