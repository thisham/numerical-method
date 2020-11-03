function cetakTabel(data, ress) {
	var table = document.getElementById("result")
	table.innerHTML = ""
	var akar = ""
	var repp = document.getElementById("report")
	repp.innerHTML = "<p>Akar tidak ditemukan</p>"
	
	if (cekRagam(ress)) {
		root = findRoot(ress)
	}
	
	console.log(root)

	for (let i = 0; i < data.length; i++) {
		if (root == ress[i]) {
			akar = "root"
			repp.innerHTML = "<p>Akar ditemukan pada iterasi ke-" + i + " dengan nilai x = " + data[i] + ".</p>"
		}
		var tr = `<tr>
			<td>` + i + `</td>
			<td>` + data[i] + `</td>
			<td>` + ress[i] + `</td>
			<td>` + akar + `</td>
			</tr>`
		table.innerHTML += tr
		akar = ""
	}
}

function findRoot(ress) {
	var curr = ress[0];
	var num = 0
    var diff = Math.abs (num - curr);
    for (var val = 0; val < ress.length; val++) {
        var newdiff = Math.abs (num - ress[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = ress[val];
        }
    }
    return curr;
}

function cekRagam(ress) {
	var neg = 0
	var pos = 0
	for (let i = 0; i < ress.length; i++) {
		if (ress[i] > 0) {
			pos = pos + 1
		} else if (ress[i] == 0) {
			pos = pos + 1
			neg = neg + 1
		} else {
			neg = neg + 1
		}
	}

	return (pos > 0 && neg > 0) ? true : false
}

document.getElementById("calc").onclick = () => {
	var va = document.getElementById("va").value
	var vb = document.getElementById("vb").value
	var vt = document.getElementById("vt").value

	if (vb >= va) {
		alert("Nilai akhir tidak boleh sama atau lebih besar dari nilai awal.")
	} else {
		let asd = new tabel(va, vb, vt)
		var data = asd.process().getData()
		var ress = asd.process().getResult()

		cetakTabel(data, ress)
	}
}