const dataKegiatan = [
    {
        image: './assets/kegiatan/dinacom.png',
        title: 'Dinacom',
        description: 'Acara lomba pengembangan website dan inovasi AI untuk mendukung kehidupan masyarakat yang berkelanjutan.',
        direct: '',
        role: 'Ketua Pelaksana'
    },
    {
        image: './assets/kegiatan/devcamp.jpg',
        title: 'Devcamp DNCC x Kodingworks',
        description: 'Acara bootcamp Laravel, dengan output berupa proyek capstone website.',
        direct: '',
        role: 'Peserta - Web Developer'
    },
    {
        image: './assets/kegiatan/btng.jpg',
        title: 'BTNG',
        description: 'Acara pelatihan teknologi tingkat dasar yang diadakan oleh DNCC.',
        direct: '',
        role: 'Seksi Acara'
    }
];


const cardKegiatan = document.getElementById('card-kegiatan');

function renderKegiatan(){
    cardKegiatan.innerHTML = '';
    var j = 0;
    dataKegiatan.forEach((item) => {
        let showedDescription = item.description;
        if (item.description.length > 45) {
            showedDescription = item.description.substring(0,40) + '...';
        }
        cardKegiatan.innerHTML += `
            <div class="col-lg-4" data-aos="fade-up">
                <div class="card glass p-4 mb-5" id="card-glass-kegiatan">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <h6 class="card-title fs-4 fw-bold mt-3">${item.title}</h6>
                    <p class="card-text fs-6">${showedDescription}</p>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="card-link color-primary fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdropKegiatan${j}">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                </div>
            </div>
        
            <div class="modal fade" id="staticBackdropKegiatan${j}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <div class="color-background modal-content card glass">
                        <div class="modal-header ">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${item.title}</h1>
                            <button type="button" class="btn-close color-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            <img src="${item.image}" class="card-img-top" alt="...">
                            <p class="card-text fs-6">${item.description}</p>
                            <p class="card-text fs-6">Role: ${item.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        j++;
    });
}


renderKegiatan();
