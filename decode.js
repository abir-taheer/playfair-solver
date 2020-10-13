const normalize = require("./normalize");
const Grid = require("./Grid");
const generatePairs = require("./generatePairs");

module.exports = function decode(phrase, alphabet){
	const grid = new Grid(alphabet);

	phrase = normalize(phrase);
	const pairs = generatePairs(phrase);

	return pairs.map(pair => {
		const firstCell = grid.getCellByLetter(pair[0]);
		const secondCell = grid.getCellByLetter(pair[1]);

		return firstCell.getDecodedLetter(secondCell) + secondCell.getDecodedLetter(firstCell);
	}).join("");
}
