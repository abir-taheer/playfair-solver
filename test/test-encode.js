const encode = require('./../encode');
const { expect } = require('chai');

describe('#encode', () => {
	it(`should encode the test phrases with a custom alphabet correctly`, function () {
		const testCases = [
			['WHITEHAT', 'PLAYFIREXMBCDGHKNOQSTUVWZ', 'ZGRUMDPV'],
			['AGOODFOODBOOKISACOOKBOOK', 'PLAYFIREXMBCDGHKNOQSTUVWZ', 'YDQEQGASQGDKVTMKLDQEVTDKVT'],
			['IAMJUSTJAMMINJELLY', 'ERTYUIOPASDFGQWHKLZXCVBNM', 'DQCSEIEPSNCSCATHZT'],
			['TODAYISAGOODDAYTODIE', 'OZAKDIREXMBCVGHYNPQSTUFWL', 'UZMENRPDBKIMMENUIMBV'],
			['JIMJAMESJACK', 'QWERTYUIOPASDFGHKLZXCVBNM', 'PLPBYDBTDUSVVM'],
		];
		for (let i = 0; i < testCases.length; i++) {
			const testCase = testCases[i];

			const phrase = testCase[0];
			const alphabet = testCase[1];
			const expected = testCase[2];

			expect(encode(phrase, alphabet)).to.equal(expected);
		}
	});
});
