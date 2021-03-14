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

import {renderMainPage} from './mainPage.js';
import {renderProjectPage} from './projectPage.js';

fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    if (urlParams.get("project") === null){
        renderMainPage(data);
    } else {
        let id = urlParams.get("project");
        if (id == "othello"){
            renderProjectPage(data.othello)
        }
    }
}); 