const fs = require("fs/promises");
const path = require("path");
const App = require("./app/App.js");

const debugFilePath = path.join(__dirname, "deb.txt");
const errFilePath = path.join(__dirname, "err.txt");

fs.writeFile(debugFilePath, "");
fs.writeFile(errFilePath, "");

const app = new App({
	debug: debugFilePath,
	error: errFilePath
});

const PORT = +(process.env.PORT ?? 3000);
const pathFile = path.join(__dirname, "..", "public");

app.createBaseServer(pathFile, "index.html");
app.listen(PORT, () => console.log("Сервёр запущен на порте: ", PORT));
