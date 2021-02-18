fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	// render HTML here
});

// function renderNavbar(page){}
// function renderAbout(about){}
// function renderNews(news){}

// function renderMainPage(data){

//     document.querySelector('.container').innerHTML = `
//         ${renderNavbar('main', Object.keys(data))}
//         ${renderAbout(data.about)}
//         ${renderNews(data.news)}
//         ${renderProjects(data.projects)}
//     `;
// }

// function renderProjects(projects){
//     return `
//     <section id="projects">
//         <h1 class="title">Projects</h1>
//         <!-- we will add a filter interface here in the next lab -->
//         <div class="project-list">
//             ${renderProjectItems(projects)}
//         </div>
//     </section>`;
// }


// function renderProjectItems(projects){
// 	return projects.map(d=>`
// 	  <div class="row">
//       <div class="col-6">
//         <div class="project-title">
//           <a href="?project=${d.id}"><strong>${d.title}</strong></a>
//         </div>
//         <div class="project-authors">
//           ${d.authors}<br>
//         </div>
// 				...
// 			<div class="col-6">
//         <img src="${d.teaser}" width="100%">
//       </div>
// 		</div>
// 	`).join('');
// }