function f(x) {
	return Math.pow(x, 2) - Math.exp(x) + 2
}

class secant {
	constructor (a, b, e, i) {
		this.va = a
		this.vb = b
		this.ve = e
		this.vi = i
	}

	process () {
		var ra = []
		var rb = []
		var rx = []
		var re = []
		var fa = []
		var fb = []
		var fx = []
		var ta = this.va
		var tb = this.vb
		var tx = 0
		var ve = this.ve

		for (let i = 0; i < this.vi; i++) {
			fa[i] = f(ta)
			fb[i] = f(tb)
			tx    = tb - ((f(tb) * (tb - ta)) / (f(tb) - f(ta)))
			fx[i] = f(tx)
			ra[i] = ta
			rb[i] = tb
			rx[i] = tx
			ta	  = tb
			tb	  = tx
		}

		for (let i = 1; i < ra.length; i++) {
			re[i] = Math.abs((rx[i] - rx[i-1])/rx[i])
		}

		this.ress = {ra, rb, rx, re, fa, fb, fx, ve}
		return this
	}

	get () {
		return this.ress
	}
}