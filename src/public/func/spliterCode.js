/**
 * @param {string} codeBase
 */

export default function spliterCode(codeBase) {
	const code = codeBase.split("!b=");
	code.shift();

	return code;
}
