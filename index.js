class Add {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	add() {
		return this.a + this.b;
	}
}

const test = new Add(1, 2);
console.log(test.add());
