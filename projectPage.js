function renderProjectPage(project){
    document.querySelector('.container').innerHTML = `
        ${renderProject(project)}
    `;
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

export {renderProjectPage};