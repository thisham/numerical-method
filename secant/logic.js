function cetakTabel(ress) {
	var table = document.getElementById("result")
	table.innerHTML = ""
	var a	 = 0
	var repp = document.getElementById("report")
	repp.innerHTML = "<p>Akar tidak ditemukan</p>"

	for (let i = 0; i < ress.ra.length; i++) {
		if (ress.re[i] > ress.ve) {
			var tr = `<tr>
				<td>` + i + `</td>
				<td>` + ress.ra[i] + `</td>
				<td>` + ress.rb[i] + `</td>
				<td>` + ress.rx[i] + `</td>
				<td>` + ress.fa[i] + `</td>
				<td>` + ress.fb[i] + `</td>
				<td>` + ress.fx[i] + `</td>
				<td>` + ress.re[i] + `</td>
				<td></td>
				</td>`
			table.innerHTML += tr
			a = i
		} else if (ress.re[i] === undefined) {
			var tr = `<tr>
				<td>` + i + `</td>
				<td>` + ress.ra[i] + `</td>
				<td>` + ress.rb[i] + `</td>
				<td>` + ress.rx[i] + `</td>
				<td>` + ress.fa[i] + `</td>
				<td>` + ress.fb[i] + `</td>
				<td>` + ress.fx[i] + `</td>
				<td>` + ress.re[i] + `</td>
				<td></td>
				</td>`
			table.innerHTML += tr
		} else if (i == a+1) {
			if (ress.re[i] < ress.ve) {
				var tr = `<tr>
					<td>` + i + `</td>
					<td>` + ress.ra[i] + `</td>
					<td>` + ress.rb[i] + `</td>
					<td>` + ress.rx[i] + `</td>
					<td>` + ress.fa[i] + `</td>
					<td>` + ress.fb[i] + `</td>
					<td>` + ress.fx[i] + `</td>
					<td>` + ress.re[i] + `</td>
					<td>root</td>
					</td>`
				table.innerHTML += tr
				repp.innerHTML = "<p>Akar ditemukan pada iterasi " + i + " dengan nilai akar: " + ress.rx[i] + ". Pengulangan telah dihentikan."
			} else {
				var tr = `<tr>
					<td>` + i + `</td>
					<td>` + ress.ra[i] + `</td>
					<td>` + ress.rb[i] + `</td>
					<td>` + ress.rx[i] + `</td>
					<td>` + ress.fa[i] + `</td>
					<td>` + ress.fb[i] + `</td>
					<td>` + ress.fx[i] + `</td>
					<td>` + ress.re[i] + `</td>
					<td></td>
					</td>`
				table.innerHTML += tr
			}
		}
	}
}

document.getElementById("calc").onclick = () => {
	var va = document.getElementById("va").value
	var vb = document.getElementById("vb").value
	var ve = document.getElementById("ve").value
	var mi = document.getElementById("mi").value

	if (vb >= va) {
		alert("Nilai akhir tidak boleh sama atau lebih besar dari nilai awal.")
	} else {
		var asd = new secant(va, vb, ve, mi)
		cetakTabel(asd.process().get())
	}
}