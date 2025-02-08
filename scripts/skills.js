const dataSkill = [{
    icon: './assets/icons/golang.svg',
    title: 'Go',
    level: 'Intermediate'
},
{
    icon: './assets/icons/java.svg',
    title: 'Java',
    level: 'Intermediate'
},
{
    icon: './assets/icons/ubuntu.svg',
    title: 'Ubuntu Server',
    level: 'Intermediate'
},
{
    icon: './assets/icons/php.svg',
    title: 'PHP',
    level: 'Intermediate'
},
{
    icon: './assets/icons/nginx.svg',
    title: 'Nginx',
    level: 'Intermediate'
},
{
    icon: './assets/icons/mysql.svg',
    title: 'MySQL',
    level: 'Intermediate'
},
{
    icon: './assets/icons/docker.svg',
    title: 'Docker',
    level: 'Intermediate'
},
{
    icon: './assets/icons/postman.svg',
    title: 'Postman',
    level: 'Intermediate'
},
{
    icon: './assets/icons/git.svg',
    title: 'Git',
    level: 'Intermediate'
},
{
    icon: './assets/icons/ssl.svg',
    title: 'SSL (Secure Socket Layer)',
    level: 'Intermediate'
},
];

function getData() {
const cardSkill = document.getElementById('card-skill');
const cardPortofolio = document.getElementById('card-portofolio');
dataSkill.forEach((item) => {
    cardSkill.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card text-white py-3 px-4 d-flex flex-row gap-4 align-items-center">
                    <img src="${item.icon}" alt="" width="15%">
                    <div class="mt-3">
                        <h5 class="fs-6 fw-bold">${item.title}</h5>
                    </div>
                </div>
            </div>
        `;
});

}
getData();