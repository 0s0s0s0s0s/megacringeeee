import gettingFileData from "../func/gettingFileData.js";
import inputData from "../func/inputData.js";

const buttonsInfo = document.querySelectorAll(".buttons");

buttonsInfo[0].addEventListener("click", gettingFileData);
buttonsInfo[1].addEventListener("click", inputData);
