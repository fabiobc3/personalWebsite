//fetch('data.json').then(response => {return response.json();}).then(data => {console.log(data);});

// async function getData(){
//     const response = await fetch('data.json');
//     const data = await response.json();
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     console.log(queryString);
//     console.log(data);
//     renderMainPage(data);
// };



fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {
    console.log(data);
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(queryString);
    
    if (urlParams.get("project") === null){
        renderMainPage(data);
    } else {
        let id = urlParams.get("project");
        if (id == "othello"){
            renderProjectPage(data.othello)
        }
    }

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
                <img class="imageStyle animate__animated animate__fadeInLeftBig" src=${about.image} alt="">
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
        <div id="row" class="col-12">
            <ul>
                ${renderProjectItems(projects)}
            </ul>
        </div>`;
    }

    function renderProjectItems(projects){
        return projects.map(d=>`
        <div id="projects">
            <h4>${d.name} <i class="fas fa-chess-board"></i></h4>
            <p>${d.info1} <span class="highlight"> ${d.pLanguage} </span> ${d.info2} </p>
        </div>
        <a href="?project=${d.id}">Learn More</a>
        `).join('');
    }

    function renderProject(project){
        return`
        <h1>${project.title}</h1>
        <ul> 
            <img src= ${project.image} alt="" class="imageStyle2">
            <p>${project.info}</p>
            <p>${project.learnMoreLinks.wiki1.info}</p>
            <a href=${project.learnMoreLinks.wiki1.link} target="_blank">${project.learnMoreLinks.wiki1.title}</a>
            <p>${project.learnMoreLinks.wiki2.info}</p>
            <a href=${project.learnMoreLinks.wiki2.link1} target="_blank">${project.learnMoreLinks.wiki2.title1}</a>
            <br>
            <a href=${project.learnMoreLinks.wiki2.link2} target="_blank">${project.learnMoreLinks.wiki2.title2}</a>
            <br>
            <br>
            <a href="index.html">Go Back to Main Page</a>
        </ul>`;
    }

    function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
            ${renderNavbar(data.navbar)}
            ${renderAbout(data.about)}
            ${renderNews(data.news)}
            ${renderProjects(data.projects)}
        `;
    }

    function renderProjectPage(project){
        document.querySelector('.container').innerHTML = `
            ${renderProject(project)}
        `;
    }
});
