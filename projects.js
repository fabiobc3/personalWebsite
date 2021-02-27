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
            <input type="radio" name="filter" value="all" checked>
            All
        </label>
        <label>
            <input type="radio" name="filter" value="personal">
            Personal
        </label>
        <label>
            <input type="radio" name="filter" value="mig">
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

function handleProjectsFilter(data){
    let buttons = document.querySelectorAll('input[name=filter]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        const val = cond.value;
        const isChecked = cond.checked;
        const filteredProjects = data.projects.filter(n => {
            if (isChecked){
                return n.tag.includes(val);
            }
        })
        const projectsSection = document.querySelector('#renderProjectItems');
        projectsSection.innerHTML = renderProjectItems(filteredProjects);
    }))
}

export {renderProjects, handleProjectsFilter};