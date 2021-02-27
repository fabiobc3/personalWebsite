function renderNews(news){
    return`
        <div class="row" id="news">
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
    <div class="row">
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

function handleNewsFilter(data){
    document.querySelector('input[name=news]')
    .addEventListener('input', function(event){
        const keyword = this.value.toLowerCase();
        const filteredNews = data.news.filter(n => {
            return n.info.toLowerCase().includes(keyword) || n.date.toLowerCase().includes(keyword)
        });
        const newsSection = document.querySelector('#renderNewsItems');
        newsSection.innerHTML = renderNewsItems(filteredNews); 
    })
}

export {renderNews, handleNewsFilter};