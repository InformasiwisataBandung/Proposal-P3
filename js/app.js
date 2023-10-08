
import data from "./data.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

// console.log(`${data.article.judulProposal}`)
setInner("judulProposal", data.article.judulProposal);

//Pengantar
setInner("pengantarProposal", `
<h2>Pengantar</h2>
<p>${data.article.pengantarProposal}</p>
`);

//Latar Belakang
let listLatarBelakang = data.article.latarBelakang4.map((item, index) => {
    return `<li>${item}</li>`;
});
setInner("latarBelakangProposal", `
<h2>Latar Belakang</h2>
<p>${data.article.latarBelakang1}</p>
<p>${data.article.latarBelakang2}</p>
<p>${data.article.latarBelakang3}</p>
<ul>${listLatarBelakang.join("")}</ul>
<p>${data.article.latarBelakang5}</p>
`);

//Deskripsi Website
let listDeskripsiWebsite = data.article.deskripsiWebsite.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("deskripsiWebsite", `
<h2>Deskripsi Website</h2>
<ul>${listDeskripsiWebsite.join("")}</ul>
`);

//DesaindanFungsionalitas
let listDesaindanFungsionalitas = data.article.DesaindanFungsionalitasList.map((item, index) => {
    return `<li>${item}</li>`;
})
setInner("desaindanFungsionalitas", `
<h2>Desain dan Fungsionalitas</h2>
<ul>${listDesaindanFungsionalitas.join("")}</ul>
`);


//waktuPelaksanaan
setInner("waktuPelaksanaan", `
<h2>Waktu Pengerjaan</h2>
<p>${data.article.waktuPelaksanaan}</p>
`);

//Kesimpulan
setInner("kesimpulan", `
<h2>Kesimpulan</h2>
<p>${data.article.kesimpulan}</p>
<p>${data.article.kesimpulan2}</p>
<p>${data.article.kesimpulan3}</p>
`);

// app.js
