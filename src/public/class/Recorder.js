import InfoBase from "./InfoBase.js";
import tableCells from "../content/tableCells.js";

export default class Recorder {
	static #stack = 255;

	/**
	 * @param {string} codeBase
	 */

	static writeMetal(codeBase) {
		const metal = InfoBase.getQuantityMetal(codeBase);

		tableCells.metal[0].textContent = metal / 2;
		tableCells.metal[1].textContent = +(
			(metal / 2).toFixed(4) / this.#stack
		).toFixed(4);
		tableCells.metal[2].textContent = metal;
		tableCells.metal[3].textContent = +(metal / this.#stack).toFixed(4);
	}

	/**
	 * @param {string} codeBase
	 */

	static writeConstructions(codeBase) {
		const constructions = InfoBase.getQuantityConstructions(codeBase);

		for (const constr of Object.keys(constructions)) {
			tableCells[constr][0].textContent = constructions[constr];

			if (tableCells[constr][1] === undefined) continue;

			tableCells[constr][1].textContent = +(constructions[constr] / 2).toFixed(
				4
			);
		}
	}
}
