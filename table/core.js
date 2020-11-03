function f(x) {
    return Math.pow(x, 2) - Math.exp(x) + 2
}

class tabel {
    constructor (a, b, t) {
        this.va = a
        this.vb = b
        this.vt = t
    }

    process() {
        var count = Math.abs((this.va - this.vb) / this.vt)
        let ress = []; let data = []
        for (let i = 0; i <= count; i++) {
            data[i] = this.va - (this.vt * i)
            ress[i] = f(data[i])
        }

        this.data = data
        this.ress = ress
        return this
    }

    getData() {
        return this.data
	}
	
	getResult() {
		return this.ress
	}
}