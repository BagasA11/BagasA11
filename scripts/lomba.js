const dataLomba = [
    {
        image: './assets/lomba/bmc_astro.png',
        title: 'BMC Astro',
        description: 'Kompetisi ide bisnis dalam business canva dengan topik lingkungan yang diadakan oleh STT Nurul Fikri Jakarta.',
        hasil: 'Semifinal',
        jangkauan: 'Nasional',
        penyelenggara: 'STT Nurul Fikri',
        direct: ''
    },
    {
        image: './assets/lomba/hackfest.png',
        title: 'GDSC Hackfest 2024',
        description: 'Kompetisi perancangan software dengan topik SDG.',
        hasil: 'Gugur',
        jangkauan: 'Nasional',
        penyelenggara: 'Google Developer Student Club',
        direct: ''
    },
    {
        image: './assets/image_not_available.png', // Tidak ada gambar yang disediakan
        title: 'Gemastik 2024',
        description: 'Kompetisi teknologi yang diadakan oleh BPTI.',
        hasil: 'Gugur',
        jangkauan: 'Nasional',
        penyelenggara: 'BPTI Kemdikbud',
        direct: ''
    },
    {
        image: './assets/lomba/hitech.jpg',
        title: 'HI-Tech 2024',
        description: 'Kompetisi teknologi hardware dan software.',
        hasil: 'Final',
        jangkauan: 'Nasional',
        penyelenggara: 'HMTI Udinus',
        direct: ''
    },
    {
        image: './assets/lomba/bagas-technoscape.png',
        title: 'Hackathon Technoscape BNCC',
        description: 'Merancang api platform as a service (PAAS) untuk otomatisasi rekam medis klaim BPJS menggunakan OCR',
        hasil: '',
        jangkauan: 'Nasional',
        penyelenggara: 'BNCC Universitas Bina Nusantara',
        direct: ''
    },
];


const cardLomba = document.getElementById('card-lomba');

function renderLomba(){
    cardLomba.innerHTML = '';
    var i = 0;
    dataLomba.forEach((item) => {
        let showedDescription = item.description;
        if (item.description.length > 45) {
            showedDescription = item.description.substring(0,40) + '...';
        }

        cardLomba.innerHTML += `
            <div class="col-lg-4" data-aos="fade-up">
                <div class="card glass p-4 mb-5" id="card-glass-lomba">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <h6 class="card-title fs-4 fw-bold mt-3">${item.title}</h6>
                    <p class="card-text fs-6">${showedDescription}</p>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="card-link color-primary fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                </div>
            </div>
        
            <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="color-background card glass modal-content ">
                        <div class="modal-header ">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${item.title}</h1>
                            <button type="button" class="btn-close color-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            <img src="${item.image}" class="card-img-top" alt="...">
                            <p class="card-text fs-6">${item.description}</p><br>
                            <p class="card-text fs-6">Hasil: ${item.hasil}</p>
                            <p class="card-text fs-6">Jangkauan: ${item.jangkauan}</p>
                            <p class="card-text fs-6">Penyelenggara: ${item.penyelenggara}</p>

                        </div>
                    </div>
                </div>
            </div>
        `;
        i++;
    });
}




renderLomba();
