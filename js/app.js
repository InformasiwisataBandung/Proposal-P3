
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

//Pemasaran
setInner("pemasaran", `
<h2>Pemasaran</h2>
<p>${data.article.Pemasaran}</p>
<p>${data.article.Pemasaran2}</p>
<p>${data.article.Pemasaran3}</p>
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

document.addEventListener("DOMContentLoaded", function () {
    fetch("./team.json")
      .then((response) => response.json())
      .then((data) => {
        const teamMembers = data.team;
        const teamSection = document.getElementById("team");
  
        if (teamSection) {
          teamMembers.forEach((member) => {
            const teamMemberHTML = `
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div class="mainflip">
                    <div class="frontside">
                      <div class="card">
                        <div class="card-body text-center">
                          <p><img class="img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"></p>
                          <h4 class="card-title">${member.name}</h4>
                          <p class="card-text">${member.role}</p>
                          <p class="card-text">${member.description}</p>
                          <a href="${member.social.facebook}" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-body text-center mt-4">
                          <h4 class="card-title">${member.name}</h4>
                          <p class="card-text">${member.description}</p>
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="${member.social.facebook}">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="${member.social.twitter}">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="${member.social.skype}">
                                <i class="fa fa-skype"></i>
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a class="social-icon text-xs-center" target="_blank" href="${member.social.google}">
                                <i class="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
  
            teamSection.querySelector(".row").innerHTML += teamMemberHTML;
          });
        }
      });
  });
  
