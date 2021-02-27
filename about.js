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

export {renderAbout};