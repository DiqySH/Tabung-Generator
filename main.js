let Clicked = function () {
    let jariJari = document.getElementById("jariJari").value;
    let tinggi = document.getElementById("tinggi").value;
    let rumusVolume = Math.PI * jariJari * jariJari * tinggi;
    let pembulatan = rumusVolume.toFixed(2);
    document.getElementById("cmKubik").innerText = pembulatan;
    let liter = rumusVolume / 1000;
    let literPembulatan = liter.toFixed(2);
    document.getElementById("liter").innerText = `~${literPembulatan}`;
    let lpSatu = 2 * Math.PI * jariJari * tinggi;
    let lpDua = 2 * Math.PI * jariJari * jariJari;
    let luasPermukaan = lpSatu + lpDua;
    let lpPembulatan = luasPermukaan.toFixed(2);
    document.getElementById("kuadrat").innerText = lpPembulatan;
}

document
    .getElementById("submit")
    .addEventListener("click", Clicked)