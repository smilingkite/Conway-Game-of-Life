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

// Lovely pattern > works
arr[4][4] = true;
arr[4][5] = true;
arr[4][6] = true;
arr[3][5] = true;
arr[5][5] = true;
// * basic pattern > works,
// and shows that the game stops calculating when two identical arrays follow each other
// arr[3][1] = true;
// arr[3][2] = true;
// arr[4][1] = true;
// arr[4][2] = true;
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
function createStartButton() {
	let button = $('<button class="button">Start Game</button>');
	$('#board').append(button);
}

function createStopButton() {
	$('button').remove();
	let button = $('<button class="stop">Stop Game</button>');
	$('#board').append(button);
}

function stopGame() {
	clearInterval(nIntervId);
}

createTable(arr);
createStartButton();

$('td').on('click', function(e) {
	// debugger;
	$(this).toggleClass('alive');
	e.preventDefault();
	var myClasses = this.classList;
	var thisX = myClasses[0].substring(1);
	var thisY = myClasses[1].substring(1);

	if (arr[thisX][thisY]) {
		arr[thisX][thisY] = false;
	} else arr[thisX][thisY] = true;
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

function game() {
	var arrNew = $.extend(true, {}, arr);
	var k = 0;
	var interval = setInterval(function() {
		for (let i = 0; i < x; i++) {
			for (let j = 0; j < y; j++) {
				let neighbours = countNeighbours(arr, i, j);
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
		k += 1;
		createTable(arrNew);
		if (_.isEqual(arr, arrNew)) {
			clearInterval(interval);
		}

		arr = $.extend(true, {}, arrNew);
	}, 2000);
}

$('button').on('click', function() {
	game();
});
