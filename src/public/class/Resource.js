export default class Resource {
	#id;
	#name;
	#quantity;

	/**
	 * @param {number} id
	 * @param {string} name
	 * @param {number} quantity
	 */

	constructor(id, name, quantity) {
		this.#id = id;
		this.#name = name;
		this.#quantity = quantity;
	}

	get id() {
		return this.#id;
	}

	get quantity() {
		return this.#quantity;
	}

	get name() {
		return this.#name;
	}
}
