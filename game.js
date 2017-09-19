'use strict';
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
		// change to $.each syntax??? http://api.jquery.com/jQuery.each/
		// see also .forEach()
		// or create a function for what happens in the loop
		// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
		// https://stackoverflow.com/questions/1331769/access-outside-variable-in-loop-from-javascript-closure
		// https://stackoverflow.com/questions/7053965/when-using-callbacks-inside-a-loop-in-javascript-is-there-any-way-to-save-a-var
		// http://conceptf1.blogspot.nl/2013/11/javascript-closures.html
		// 1) note that the scope problem is solved in ES6 by using the let-syntax.
		// // map() // //
		// ES6 array.map() function is also automatically closed.
		// https://stackoverflow.com/questions/45659734/how-to-use-array-map-with-a-2-dimensional-array
		// requires adapting countNeighbours to find the index of each cell.
		for (let i = 0; i < x; i++) {
			for (let j = 0; j < y; j++) {
				let neighbours = countNeighbours(arr, i, j);
				console.log(neighbours);
				// debugger;
				// FIX adding this if-statement gives wrong count in countNeighbours
				if (neighbours < 2 && arr[i][j]) {
					arrNew[i][j] = false;
				}
			}
		}
	}
	createTable(arrNew);
	// arr = arrNew;
}, 2000);
