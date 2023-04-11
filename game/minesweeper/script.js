$(document).ready(function () {
  var numRows = 10;
  var numCols = 10;
  var numMines = 10;
  var squares = [];

  function createGrid() {
    var $minesweeper = $("#minesweeper");
    $minesweeper.css("grid-template-rows", `repeat(${numRows}, 30px)`);
    $minesweeper.css("grid-template-columns", `repeat(${numCols}, 30px)`);
    for (var i = 0; i < numRows; i++) {
      var row = [];
      for (var j = 0; j < numCols; j++) {
        var $square = $("<div>", {
          "class": "square hidden",
          "data-row": i,
          "data-col": j
        });
        $square.appendTo($minesweeper);
        row.push({
          $element: $square,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          numAdjacentMines: 0
        });
      }
      squares.push(row);
    }

  }

  function plantMines() {
    var numPlantedMines = 0;
    while (numPlantedMines < numMines) {
      var row = Math.floor(Math.random() * numRows);
      var col = Math.floor(Math.random() * numCols);
      if (!squares[row][col].isMine) {
        squares[row][col].isMine = true;
        numPlantedMines++;
      }
    }
  }

  function revealSquare(row, col) {
    var square = squares[row][col];
    if (square.isFlagged || square.isRevealed) {
      return;
    }
    square.isRevealed = true;
    square.$element.removeClass("hidden");
    if (square.isMine) {
      square.$element.text("💣");
      square.$element.addClass("mine");
      alert("Game over!");
    } else if (square.numAdjacentMines > 0) {
      square.$element.text(square.numAdjacentMines);
    } else {
      for (var i = row - 1; i <= row + 1; i++) {
        for (var j = col - 1; j <= col + 1; j++) {
          if (i >= 0 && i < numRows && j >= 0 && j < numCols) {
            revealSquare(i, j);
          }
        }
      }
    }
  }

  function countAdjacentMines(row, col) {
    var count = 0;
    for (var i = row - 1; i <= row + 1; i++) {
      for (var j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < numRows && j >= 0 && j < numCols && squares[i][j].isMine) {
          count++;
        }
      }
    }
    return count;
  }

  function updateAdjacentMines() {
    for (var i = 0; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
        var square = squares[i][j];
        if (!square.isMine) {
          square.numAdjacentMines = countAdjacentMines(i, j);
        }
      }
    }
  }

  function flagSquare(event) {
    event.preventDefault();
    var $square = $(this);
    var row = $square.data("row");
    var col = $square.data("col");
    var square = squares[row][col];
    if (!square.isRevealed) {
      square.isFlagged = !square.isFlagged;
      if (square.isFlagged) {
        $square.addClass("flagged");
        $square.text("🚩");
      } else {
        $square.removeClass("flagged");
        $square.empty();
      }
    }
  }

  function setupGame(difficulty) {
    numRows = Number(difficulty);
    numCols = Number(difficulty);
    (difficulty>=20) ?numMines = Number(difficulty*3) : numMines = Number(difficulty)
    createGrid();
    plantMines();
    updateAdjacentMines();
    $("body").on("contextmenu", function(e) {
      return false;
    });
    $(".square").mousedown(function (event) {
      var $square = $(this);
      var row = $square.data("row");
      var col = $square.data("col");
      if (event.which === 1) {
        revealSquare(row, col);
      } else if (event.which === 3) {
        flagSquare.call(this, event);
      }
    });
  }
  $('#generate').on('click', (e) => {
    e.preventDefault();
    let difficulty = Number($('input[name=group]:checked').val());
    setupGame(difficulty);
    $('#generate').toggleClass('disabled');
    $('#generate').off();
})
});