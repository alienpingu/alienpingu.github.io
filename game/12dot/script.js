const start = 0; // starting number
const end = 12; // ending number

const arr = Array.from({ length: end - start + 1 }, (_, i) => start + i);
const res = arr;

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

shuffleArray(arr);

let data = {
	cell0: {
		value: "",
		int: [11,1, 5,7]
	},
	cell1: {
		value: "",
		int: [12, 0, 2]
	},
	cell2: {
		value: "",
		int: [2, 3]
	},
	cell3: {
		value: "",
		int: [2, 4]
	},
	cell4: {
		value: "",
		int: [3, 5]
	},
	cell5: {
		value: "",
		int: [0, 4, 6]
	},
	cell6: {
		value: "",
		int: [5, 7]
	},
	cell7: {
		value: "",
		int: [6, 0,8]
	},
	cell8: {
		value: "",
		int: [9, 7]
	},
	cell9: {
		value: "",
		int: [8, 10]
	},
	cell10: {
		value: "",
		int: [9, 11]
	},
	cell11: {
		value: "",
		int: [10, 0, 12]
	},
	cell12: {
		value: "",
		int: [11, 1]
	}
}

function getInfo(n) {
	let tmp = {}
	$.each(data, function (key, obj) {
		if (obj.value === Number(n)) {
			tmp = {
				position: key,
				value: obj.value,
				int: obj.int
			}
		}
	});
	return tmp;
}

function getLegalMove(n) {
	let tmp = undefined;
	let obj = getInfo(n);
	obj.int.forEach(num => {
		if (data[`cell${num}`].value === 0) {
			tmp = {
				from: obj.position,
				to: `cell${num}`
			}
		}
	})
	return tmp;
}

function init() {
	for (let i = 0; i < 13; i++) {
		let x = $(`#cell${arr[i]}`).offset().left-2;
		let y = $(`#cell${arr[i]}`).offset().top-2;
		$(`#dot${i}`).offset({top: y,left: x})
		$(`#dot${i}`).click((e) => move(e.currentTarget.id.slice(3)))
		data[`cell${arr[i]}`].value = i;
	}
}

function renderMove(fromDot,fromCell, toCell) {
	let left1 = $(`#${toCell}`).offset().left-2;
	let top1 = $(`#${toCell}`).offset().top-2;
	let left2 = $(`#${fromCell}`).offset().left-2;
	let top2 = $(`#${fromCell}`).offset().top-2;
	$(`#${fromDot}`).offset({
		top: top1,
		left: left1
	})
	$(`#dot0`).offset({
		top: top2,
		left: left2
	})
	data[toCell].value = data[fromCell].value;
	data[fromCell].value = 0;
}

function move(n) {
	let o = getLegalMove(n);
	if (o !== undefined) {
		let l1 = $(`#${o.to}`).offset().left - 2;
		let t1 = $(`#${o.to}`).offset().top - 2;
		let l2 = $(`#${o.from}`).offset().left - 2;
		let t2 = $(`#${o.from}`).offset().top - 2;
		$(`#dot${data[o.from].value}`).offset({top: t1,left: l1})
		$(`#dot0`).offset({top: t2,left: l2})
		data[o.to].value = data[o.from].value;
		data[o.from].value = 0;
	}
	if (winCheck()) {
		alert('you win')
	}
}

function winCheck() {
	let b = true;
	for (let i = 0; i < 13; i++) {
		if (data[`cell${i}`].value !== i) {
			b = false;
		}
	}
	return b;
}

init();