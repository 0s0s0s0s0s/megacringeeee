import spliterCode from "../func/spliterCode.js";
import Construction from "./Construction.js";

export default class InfoBase {
	/**
	 * @param {string} codeBase
	 */

	static getQuantityMetal(codeBase) {
		const code = spliterCode(codeBase);

		const metal = code.reduce((metal, code) => {
			const construction = new Construction(code);

			return (metal += construction.metal);
		}, 0);

		return metal;
	}

	/**
	 * @param {string} codeBase
	 */

	static getQuantityConstructions(codeBase) {
		const code = spliterCode(codeBase);

		const constructions = code.reduce(
			(quantity, code) => {
				const construction = new Construction(code);

				if (construction.name === "markFloor") {
					const floors =
						construction.coordinates.x * construction.coordinates.y;
					quantity.floor += floors;

					return quantity;
				}

				if (!(construction.name in quantity)) {
					quantity[construction.name] = 0;
				}

				if (
					construction.name === "Tiling floor" ||
					construction.name === "Stone floor"
				) {
					quantity.floor += 1;

					return quantity;
				}

				quantity[construction.name] += 1;
				quantity.floor -= 1;

				return quantity;
			},
			{ floor: 0 }
		);

		if (constructions.floor < 0) constructions.floor = 0;

		return constructions;
	}
}
