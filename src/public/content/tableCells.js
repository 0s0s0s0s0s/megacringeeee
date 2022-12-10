const table = [...document.querySelectorAll("td")].filter(
	cell => cell.textContent === "???"
);

const tableCells = {
	metal: [table[0], table[1], table[2], table[3]],
	"Metal Door": [table[4], table[5]],
	"Metal Wall": [table[6], table[7]],
	"Metal Low Wall": [table[8], table[9]],
	"Metal Low Door": [table[10], table[11]],
	floor: [table[12]]
};

export default tableCells;
