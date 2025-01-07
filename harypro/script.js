function createCard(title, cname, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views > 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else if (views > 1000) {
        viewStr = (views / 1000).toFixed(1) + "k";
    } else {
        viewStr = views;
    }

    let html = `
        <div class="card-container">
            <div class="image">
                <img src="${thumbnail}" alt="Thumbnail">
                <p class="duration">${duration}</p>
            </div>
            <div class="cart">
                <h1>${title}</h1>
                <p>${cname} • ${viewStr} views • ${monthsOld} months ago</p>
            </div>
        </div>`;
    
    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}

createCard(
    "This is sigma web development",
    "CodeWithHarry",
    720000,
    7,
    "21:30",
    "https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg"
);