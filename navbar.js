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

export {renderNavbar};