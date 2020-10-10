export default function normalize(str) {
	return (
		str
			// Change any accented versions of letters to standard version
			.toLocaleUpperCase()
			// Remove non-letter-characters
			.replace(/[^A-Z]/g, '')
	);
}
