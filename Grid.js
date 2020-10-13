const normalize = require("./normalize");

class Grid {
	constructor(letters) {
		this.letterMap = {};

		this.items = normalize(letters)
			// Split at every 5 characters
			.match(/.{1,5}/g)
			// Split each 5 char string into array of characters
			.map((rowStr, row) =>
				// Convert each character into a grid cell with its own column and row
				rowStr.split('').map((letter, column) => {
					// Add character to a map for faster retrieval
					const cell = new Cell(letter, column, row, this);
					this.letterMap[letter] = cell;
					return cell;
				})
			);

		this.numColumns = 5;
		this.numRows = 5;
	}

	getCellByCoordinates(row, column) {
		const foundRow = this.items[row];

		if (foundRow) {
			const foundColumn = foundRow[column];

			if (foundColumn) {
				return foundColumn;
			}
		}

		// Means outside of the grid
		return null;
	}

	getCellByLetter(letter) {
		const cell = this.letterMap[letter];

		return cell || null;
	}
}

class Cell {
	constructor(value, column, row, grid) {
		this.value = value;
		this.column = column;
		this.row = row;
		this.grid = grid;
	}

	getAdjacent(rowOffset = 0, columnOffset = 0) {
		const newRow = (this.row + rowOffset + this.grid.numRows) % this.grid.numRows;
		const newColumn = (this.column + columnOffset + this.grid.numColumns) % this.grid.numColumns;

		return this.grid.getCellByCoordinates(newRow, newColumn);
	}

	getEncodedLetter(otherPair){
		if(otherPair.column === this.column){
			return this.getAdjacent(0, 1);
		}

		if(otherPair.row === this.row){
			return this.getAdjacent(1, 0);
		}

		return this.grid.getCellByCoordinates(this.row, otherPair.column);
	}

	getDecodedLetter(otherPair){
		if(otherPair.column === this.column){
			return this.getAdjacent(0, -1);
		}

		if(otherPair.row === this.row){
			return this.getAdjacent(-1, 0);
		}

		return this.grid.getCellByCoordinates(this.row, otherPair.column);
	}

	toString(){
		return this.value;
	}
}

module.exports = Grid;
