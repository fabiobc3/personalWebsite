import {renderNavbar} from './navbar.js';
import {renderAbout} from './about.js';
import {renderNews, handleNewsFilter} from './news.js';
import {renderProjects, handleProjectsFilter} from './projects.js';

function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar(data.navbar)}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
    handleNewsFilter(data);
    handleProjectsFilter(data);
}

export {renderMainPage};