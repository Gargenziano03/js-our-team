//Dato un array di oggetti rappresentante un team di un’azienda, 
//creare una pagina dedicata in cui mostrare una card per ciascun componente.
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

const rowEl = document.querySelector('.row');
// creare un ciclo for per ciclare nel array
for (let i = 0; i < teamMembers.length; i++) {
  const memberEl = teamMembers[i];
  console.log(memberEl);
  // markup
  const { name, role, email, img } = memberEl;
  const markup = `<div class="col-4">
                    <!--colonna-->
                    <div class="card text-bg-dark">
                        <!--carta-->
                        <img src="${img}" alt="">
                        <h3>${name}</h3>
                        <spam>${role}</spam>
                        <spam>${email}<spam>
                    </div>
                </div>`
               
              

}






