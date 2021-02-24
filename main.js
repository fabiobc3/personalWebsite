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
                <img class="imageStyle" src=${about.image} alt="">
            </div>
            <div id="about" class="col-6">
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
                    <div class="col-12">
                        <h2>News</h2>
                    </div>
            </div>
            <div class="search row">
                <input type="search" name='news' placeholder="Search News...">
            </div>
            <div id="renderNewsItems">
                ${renderNewsItems(news)}
            </div>`
    }

    function renderNewsItems(news){
        return`
        <div id="news" class="row">
        <div class="col-6">
            <ul>
                ${renderNewsItemsInfo(news)}
            </ul>
        </div>
        <div class="col-6">
            <ul>
                ${renderNewsItemsDate(news)}
            </ul>
        </div>
    </div>`
    }

    function renderNewsItemsInfo(news){
        return news.slice(0,3).map(d=>`
        <li>${d.info}</li>
        <br>
        `).join("");
    }
    
    function renderNewsItemsDate(news){
        return news.slice(0,3).map(d=>`
        <li>${d.date}</li>
        <br>
        `).join("");
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
        <div class="filter">
	        <label>
	            <input type="checkbox" name="filter" value="all" checked>
                All
            </label>
	        <label>
	            <input type="checkbox" name="filter" value="personal" checked>
                Personal
	        </label>
            <label>
                <input type="checkbox" name="filter" value="mig" checked>
                MIG
            </label>
        </div>
        <!-- PROJECTS -->
        <div class="row" class="col-12">
            <ul id="renderProjectItems">
                ${renderProjectItems(projects)}
            </ul>
        </div>`;
    }

    function renderProjectItems(projects){
        return projects.map(d=>`
        <div id="projects">
            <h4>${d.name} ${d.logo}</h4>
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
            ${renderProjectLink(project)}
            <br>
            <br>
            <a href="${project.returnToMainPage}">Go Back to Main Page</a>
        </ul>`;
    }

    function renderProjectLink(project){
        return project.learnMoreLinks.map(d =>`
        <p>${d.info}</p>
        <a href=${d.link} target="_blank">${d.title}</a>
        `).join("");
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
  
    document.querySelector('input[name=news]')
    .addEventListener('input', handlerNews);

    function handlerNews(){
        const keyword = this.value.toLowerCase();
        const filteredNews = data.news.filter(n => {
            return n.info.toLowerCase().includes(keyword) || n.date.toLowerCase().includes(keyword)
        });
        const newsSection = document.querySelector('#renderNewsItems');
        newsSection.innerHTML = renderNewsItems(filteredNews); 
    }

    let filteredProjects;
    let buttons = document.querySelectorAll('input[name=filter]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        const val = cond.value;
        const isChecked = cond.checked;
        if (filteredProjects === undefined || filteredProjects.length == 0){
            filteredProjects = data.projects;
        }
        console.log(filteredProjects);
        filteredProjects = filteredProjects.filter(n => {
            if (isChecked){
                return n.tag.includes(val);
            }
            else{
                return !n.tag.includes(val);
            }
        })
        const projectsSection = document.querySelector('#renderProjectItems');
        projectsSection.innerHTML = renderProjectItems(filteredProjects);
        console.log(filteredProjects);
    }))
});
