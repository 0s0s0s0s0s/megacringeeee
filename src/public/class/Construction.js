export default class Construction {
	#x;
	#y;
	#name;
	#metal;

	static #allConstructions;

	static {
		(async () => {
			this.#allConstructions = await (await fetch("../data.json")).json();
		})();
	}

	/**
	 * @param {string} codeBase
	 */

	constructor(codeBase) {
		const code = codeBase.split(":");
		const id = +code[0];

		if (id === 153) {
			this.#x = +code[1] + 1;
			this.#y = +code[2] + 1;
			this.#name = "markFloor";
			this.#metal = 0;
			return;
		}

		const constr = Construction.#allConstructions.find(obj => obj.id === id);

		this.#name = constr.name;
		this.#metal = constr.craft.find(craft => craft[0] === 8)?.[1] ?? 0;
	}

	get coordinates() {
		if (this.#x && this.#y) {
			return {
				x: this.#x,
				y: this.#y
			};
		}
		return {};
	}

	/**
	 * @return {string}
	 */

	get name() {
		return this.#name;
	}

	/**
	 * @return {number}
	 */

	get metal() {
		return this.#metal;
	}
}
