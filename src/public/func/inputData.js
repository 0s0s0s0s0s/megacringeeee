import Recorder from "../class/Recorder.js";

/**
 * @param {string} codeBase
 */

export default function inputData() {
	const codeBase = prompt("Введите код базы");

	Recorder.writeMetal(codeBase);
	Recorder.writeConstructions(codeBase);
}
