import Recorder from "../class/Recorder.js";

const inputFile = document.createElement("input");

inputFile.type = "file";
inputFile.style.display = "none";

inputFile.addEventListener("change", function () {
	const fileReader = new FileReader();

	fileReader.readAsText(this.files[0]);

	fileReader.addEventListener("load", () => {
		Recorder.writeMetal(fileReader.result);
		Recorder.writeConstructions(fileReader.result);
	});
});

document.body.append(inputFile);

export default function gettingFileData() {
	inputFile.click();
}
