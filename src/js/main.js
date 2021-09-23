const hamburger_button = document.querySelector("#js-hamburger-button");
const navbar_bottom = document.querySelector("#js-navbar-bottom");
const form = document.querySelector('.shortening-form');
const urlInput = form.elements["url"];
const resultsList = document.querySelector(".shortening-results__list");
// const resultsSection = document.querySelector(".shortening-results");

const errorContainer = document.querySelector(".error-message");

const API_URL = 'https://api.shrtco.de/v2/shorten?url=';


hamburger_button.addEventListener("click", function(e) {
    console.log('clicked!');
    navbar_bottom.classList.toggle("hidden");
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('On load');
    let linkData = localStorage.getItem('shortenedUrl');
    if (linkData) {
        linkData = JSON.parse(linkData);
        updateResults(linkData.originalUrl, linkData.shortLinkList);
    }
});

form.addEventListener('submit', function(event){
    event.preventDefault();

    // removing error state if there was an error previously.
    if(form.classList.contains('error')) {
        errorContainer.innerText = "";
        form.classList.remove('error');
    }

    // input validation
    // empty url
    if( !urlInput.value ) {
        errorContainer.innerText = "Please add a link";
        form.classList.add('error');
        return;
    }
    // url doesn't match pattern
    const urlRe = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{1,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    // const urlRe = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
    if(!urlRe.test(urlInput.value)) {
        console.log('invalid url');
        errorContainer.innerText = "Enter a correctly formatted url";
        form.classList.add('error');
        return;
    }
    
    console.log(urlInput.value);
    updateDom(urlInput.value);
    urlInput.value = "";
});

async function updateDom(urlToShorten) {
    const {originalUrl, shortLinkList} = await getUrl(urlToShorten);
    updateResults(originalUrl, shortLinkList);
}

// get shortened url
async function getUrl(url="https://www.frontendmentor.io") {
    try {
        const response = await fetch(`${API_URL}${url}`);
        const data = await response.json();
        console.log(data);
        const linkData = {
            originalUrl: data.result["original_link"],
            shortLinkList: [
                data.result["full_short_link"],
                data.result["full_short_link2"],
                data.result["full_short_link3"],
            ]
        }
        localStorage.setItem('shortenedUrl', JSON.stringify(linkData));
        console.log(linkData);
        return linkData;
    } catch (e) {
        console.log(e);
    }
}

// update dom
function updateResults(originalUrl, shortenedLinks) {
    if( document.querySelectorAll(".shortening-results__list__item").length ) {
        console.log('Updating');
        updateResultItems(originalUrl, shortenedLinks);
    } else {
        console.log('Creating');
        createResultItems(originalUrl, shortenedLinks);
    }
}

function createResultItems(originalUrl, shortenedLinks) {
    for( let i=0; i<shortenedLinks.length; i++) {
        const resultContainer = createResultItem(originalUrl, shortenedLinks[i]);
        resultsList.prepend(resultContainer);
    }
}

function updateResultItems(originalUrl, shortenedLinks) {
    const resultsItems = document.querySelectorAll(".shortening-results__list__item");
    for( let i=0; i<resultsItems.length; i++ ) {
        let inputUrl = resultsItems[i].querySelector('.input-url');
        let outputUrl = resultsItems[i].querySelector('.output-url');
        inputUrl.innerText = originalUrl;
        outputUrl.innerText = shortenedLinks[i];
    }
}

// create result item
function createResultItem(originalUrl, shortenedUrl) {
    const resultContainer = document.createElement('li');
    resultContainer.classList.add("shortening-results__list__item")
    
    const inputUrl = document.createElement('p');
    inputUrl.appendChild(document.createTextNode(originalUrl));
    inputUrl.classList.add('input-url');
    resultContainer.appendChild(inputUrl);

    const outputContainer = document.createElement('div');
    outputContainer.classList.add("output-container");

    const outputUrl = document.createElement('p');
    outputUrl.appendChild(document.createTextNode(shortenedUrl));
    outputUrl.classList.add('output-url');

    const copyButton = document.createElement('button');
    copyButton.classList.add("btn", "btn--radius-small", "btn--accent");
    copyButton.appendChild(document.createTextNode('copy'));

    copyButton.addEventListener('click', function() {
        let selection = window.getSelection();

        if(selection.rangeCount > 0) {
            selection.removeAllRanges();
        }

        let range = document.createRange();
        range.selectNode(outputUrl);
        
        selection.addRange(range);
        document.execCommand('copy');

        copyButton.innerText = "Copied";
        copyButton.classList.remove('btn--accent');
        copyButton.classList.add('btn--dark');
    });

    outputContainer.appendChild(outputUrl);
    outputContainer.appendChild(copyButton);
    
    resultContainer.appendChild(outputContainer);
    
    return resultContainer;
}

console.log(urlInput.value);

console.log('Loaded');