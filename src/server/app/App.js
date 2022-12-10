const http = require("http");
const path = require("path");
const fs = require("fs/promises");

class App {
	#server;
	#debug;
	#error;

	/**
	 * @param {{debug: string, error: string}} param0
	 */

	constructor({ debug, error }) {
		this.#debug = debug ?? null;
		this.#error = error ?? null;
	}

	/**
	 * @param {Error} error
	 */

	#onError(error) {
		fs.appendFile(this.#error, error + "\n\n");
	}

	/**
	 * @param {string} text
	 */

	#onDebug(text) {
		fs.appendFile(this.#debug, text + "\n\n");
	}

	/**
	 * @param {(req: http.IncomingMessage res: http.ServerResponse)} callback
	 */

	createServer(callback) {
		this.#server = http.createServer(callback);
	}

	/**
	 * @param {string} pathFile
	 * @param {string} index
	 */

	createBaseServer(pathFile, index = "index.html") {
		this.#server = http.createServer((req, res) => {
			let filePath = path.join(
				pathFile,
				req.url === "/" ? index : req.url ?? "/"
			);

			const ext = path.extname(filePath);
			let contentType = "text/html";

			switch (ext) {
				case ".css":
					contentType = "text/css";
					break;
				case ".js":
					contentType = "text/javascript";
					break;
				case ".json":
					contentType = "application/json";
					break;
				default:
					contentType = "text/html";
			}

			if (!ext) {
				filePath += ".html";
			}

			fs.readFile(filePath)
				.then(content => {
					res.writeHead(200, {
						"Content-Type": contentType
					});

					this.#debug && this.#onDebug(`${req.url}`);

					res.end(content);
				})
				.catch(err => {
					console.error(err);
					this.#error && this.#onError(JSON.stringify(err, null, 2));
				});
		});
	}

	/**
	 * @param {number} port
	 * @param {() => void} callback
	 */

	listen(port, callback) {
		this.#server.listen(port, callback);
	}
}

module.exports = App;
