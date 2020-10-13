const decode = require('./../decode');
const { expect } = require('chai');

describe('#decode', () => {
	const testCases = [
		['ZGRUMDPV', 'PLAYFIREXMBCDGHKNOQSTUVWZ', 'WHITEHAT'],
		['YDQEQGASQGDKVTMKLDQEVTDKVT', 'PLAYFIREXMBCDGHKNOQSTUVWZ', 'AGOXODFOODBOOKISACOXOKBOOK'],
		['PLPBYDBTDUSVVN', 'QWERTYUIOPASDFGHKLZXCVBNM', 'IXIMIAMESIACKZ'],
		['DQCSEIEPSNCSCATHZT', 'ERTYUIOPASDFGQWHKLZXCVBNM', 'IAMIUSTIAMMINIELLY'],
	];

	it(`should decode the test phrases with a custom alphabet correctly`, function () {
		for (let i = 0; i < testCases.length; i++) {
			const testCase = testCases[i];

			const phrase = testCase[0];
			const alphabet = testCase[1];
			const expected = testCase[2];

			expect(decode(phrase, alphabet)).to.equal(expected);
		}
	});
});
