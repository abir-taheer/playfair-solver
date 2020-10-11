// Expects the string to be normalized
module.exports = function generatePairs(str) {
	const pairs = [];

	for (let i = 0; i < str.length; i += 2) {
		const pair = str.substr(i, 2);
		const firstLetter = pair[0];

		if (pair === firstLetter) {
			pairs.push([pair, 'X']);
		} else if (firstLetter === pair[1]) {
			pairs.push([firstLetter, 'X']);
			i--;
		} else {
			pairs.push([firstLetter, pair[1]]);
		}
	}

	return pairs;
};
