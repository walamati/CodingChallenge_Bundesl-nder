function init() {
    renderStates();
    renderLetters();
}

function renderStates() {
    let statesGallery = document.getElementById('statesGallery');
    for (let i = 0; i < allStates.length; i++) {
        let singleState = allStates[i];
        statesGallery.innerHTML += statesGalleryHtmlCode(singleState);
    }
}

function statesGalleryHtmlCode(singleState){
    let htmlCode = /*html */ `
    <a target="_blank" href="${singleState['url']}" class="singleStates">
        <h3>${singleState['name']}</h3>
        <span>${singleState['population']} Millionen</span>
    </a>
    `;
    return htmlCode;
}

function renderLetters() {
    let letterGallery = document.getElementById('letterGallery');
    for (let i = 0; i < filterLetters.length; i++) {
        const singleLetter = filterLetters[i];
        letterGallery.innerHTML += letterGalleryHtmlCode(singleLetter);
    }
}

function letterGalleryHtmlCode(singleLetter){
    let htmlCode = /*html */ `
    <button onclick="filterStates('${singleLetter}')">
        <h3>${singleLetter}</h3>
    </button>
    `;
    return htmlCode;
}

function filterStates(singleLetter) {
    let statesGallery = document.getElementById('statesGallery');
    let counter = 0;
    statesGallery.innerHTML = '';
    for (let i = 0; i < allStates.length; i++) {
        let singleState = allStates[i];
        let firstLetter = singleState['name']['0'];
        if (singleLetter == firstLetter) {
            counter++;
            statesGallery.innerHTML += statesGalleryHtmlCode(singleState);
        }
    }
    if (counter == 2) {
        document.querySelectorAll('.singleStates').forEach(element => {
            element.style.width = 'calc(50% - 10px)';})
    } else if(counter == 1){
        document.querySelectorAll('.singleStates').forEach(element => {
            element.style.width = 'calc(100% - 10px)';})
    }
}