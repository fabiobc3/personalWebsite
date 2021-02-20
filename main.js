//fetch('data.json').then(response => {return response.json();}).then(data => {console.log(data);});

async function getData(){
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
    renderMainPage(data);

};

function renderNavbar(navbar){
    return`
    <nav>
        <ul class="flexbox">
            <li>
                <a href="#about">${navbar.about}</a>
            </li>
            <li>
                <a href="#news">${navbar.news}</a>
            </li>
            <li>
                <a href="#projects">${navbar.projects}</a>
            </li>
        </ul>
    </nav>`;
}

function renderAbout(about){
    return`
    <div class="row topMarg">
        <div class="col-12">
            <h1>${about.name}</h1>
        </div>
    </div>
    <!-- PICTURE AND ABOUT -->
    <div class="row">
        <div class="col-6">
            <img class="imageStyle animate__animated animate__fadeInLeftBig" src="${about.image}" alt="">
        </div>
        <div id="about" class="col-6 animate__animated animate__fadeInRightBig">
            <ul>
                <h2>About</h2>
                <p>${about.info1}<span class="highlight">${about.major}</span>${about.info2}<i class="fas fa-biking"></i>${about.info3}<span class="highlight2">${about.email}</span></p> 
            </ul>
        </div>
    </div>`;
}

function renderNews(news){
    return`
    <div class="row">
            <div class="col-12 animate__animated animate__fadeInUpBig">
                <h2>News</h2>
            </div>
    </div>
    <div id="news" class="row animate__animated animate__fadeInUpBig">
        <!-- NEWS -->
        <div class="col-6">
            <ul>
                <li>${news[0].info}</li>
                <li>${news[1].info}</li>
                <li>${news[2].info}</li>
                <li>${news[3].info}</li>
            </ul>
        </div>
        <!-- DATES -->
        <div class="col-6">
            <ul>
                <li>${news[0].date}</li>
                <li>${news[1].date}</li>
                <li>${news[2].date}</li>
                <li>${news[3].date}</li>
            </ul>
        </div>
    </div>`;
}

function renderProjects(projects){
    return`
    <!-- PROJECTS SECTION -->
    <!-- TITLE -->
    <div class="row">
        <div class="col-12">
            <h2>Projects</h2>
        </div>
    </div>
    <!-- PROJECTS -->
    <!-- PROJECT 1 -->
    <div id="row" class="col-12">
        <ul>
            <div id="projects">
                <h4>${projects[0].name} <i class="fas fa-chess-board"></i></h4>
                <p>${projects[0].info1} <span class="highlight"> ${projects[0].pLanguage} </span> ${projects[0].info2} </p>
            </div>
            <a href="${projects[0].link} ">Learn More</a>
        </ul>
    </div>`;
}

function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar(data.navbar)}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
}

getData();