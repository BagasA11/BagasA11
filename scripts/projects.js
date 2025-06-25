const dataPortofolioWeb = [
    {
        image: './assets/projects/banturiset.png',
        title: 'Banturiset',
        description: 'Website crowdfunding untuk membantu kegiatan riset di Indonesia.',
        github: 'https://github.com/BagasA11/banturiset',
        direct: 'https://banturiset.vercel.app/'
    },
    {
        image: './assets/projects/quiriosiz.jpg',
        title: 'Quizrious',
        description: 'Aplikasi kuis dengan fitur integrasi soal menggunakan API Google Spreadsheet.',
        github: 'https://github.com/BagasA11/HiTech-hmti2024',
        direct: ''
    },
    {
        image: './assets/projects/decipher-streamlit.png',
        title: 'Decipher-Streamlit',
        description: 'Aplikasi untuk menerjemahkan teks terenkripsi caesar cipher, dengan pembelajaran mesin regresi logistik.',
        github: 'https://decipher-public.streamlit.app/',
        direct: ''
    },
    {
        image: './assets/projects/fisika-gayapeluru.png',
        title: 'Fisika-GayaPeluru',
        description: 'Website simulasi gaya peluru untuk tugas akhir matakuliah fisika.',
        github: 'https://github.com/BagasA11/kelompok6-fisika2023',
        direct: ''
    },
    {
        image: './assets/projects/appointment-system-laravel.jpg',
        title: 'Medical Appointment System',
        description: 'Website Manajemen janji antara dokter dan pasien.',
        github: 'https://github.com/BagasA11/wd-bengkod',
        direct: ''
    },
];



const cardPortofolio = document.getElementById('card-portofolio');

function renderPortofolio(){
    cardPortofolio.innerHTML = '';
    dataPortofolioWeb.forEach((item) => {
        let showedDescription = item.description;
        if (item.title == 'Decipher-Streamlit' || item.title == 'Quizrious') {
            showedDescription = item.description.substring(0,40) + '...';
        }
        cardPortofolio.innerHTML += `
            <div class="col-lg-4" data-aos="fade-up">
                <div class="card glass quizrious p-4 mb-5">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <h6 class="card-title fs-4 fw-bold mt-3">${item.title}</h6>
                    <p class="card-text fs-6">${showedDescription}</p>
                    <div class="d-flex justify-content-end">
                        <a href="${item.github}" class="card-link color-primary fs-5" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <button type="button" class="card-link color-primary fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop${item.title}">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop${item.title}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="color-background card glass modal-content ">
                        <div class="modal-header ">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${item.title}</h1>
                            <button type="button" class="btn-close color-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            <img src="${item.image}" class="card-img-top" alt="...">
                            <p class="card-text fs-6">${item.description}</p><br>
                            <p class="card-text fs-6"><span><i class="fa-brands fa-github"></i></span> <a href="${item.github}" class="color-primary" target="_blank" rel="noopener noreferrer">${item.github}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        `;

    });
}







renderPortofolio();
