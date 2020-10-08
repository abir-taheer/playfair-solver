export class Grid {
	constructor(letters) {
		this.charMap = {};

		this.items = letters
			// Remove any weird characters
			.toLocaleLowerCase()
			// Remove non-letter-characters
			.replace(/[^a-z]/, "")
			// Split at every 5 characters
			.match(/.{1,5}/g)
			// Split each 5 char string into array of characters
			.map((rowStr, row) =>
				// Convert each character into a grid cell with its own column and row
				rowStr.split("").map((letter, column) => {
					// Add character location to a map for faster retrieval

					this.charMap[letter] = { row, column };
					return new Cell(letter, column, row, this);
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
		const coords = this.charMap[letter];
		if (coords) {
			return this.getCellByCoordinates(coords.row, coords.column);
		}

		return null;
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
		const newRow = (this.row + rowOffset) % this.grid.numRows;
		const newColumn = (this.column + columnOffset) % this.grid.numColumns;

		return this.grid.getCellByCoordinates(newRow, newColumn);
	}
}
