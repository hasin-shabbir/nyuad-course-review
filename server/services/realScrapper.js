const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

const scrape = (fn) => {

    nightmare
    .goto('https://nyuad.nyu.edu/en/course-list.html')
    .wait('.item')
    .evaluate(function() {
        var elements = Array.from(document.getElementsByClassName('item'));
        return elements.map(function(element) {
            return {
                code: element['attributes'][1].value,
                name: element.innerText,
                level: parseInt(element['attributes'][1].value.match(/(\d+)/)[0].replace(element['attributes'][1].value.match(/(\d+)/)[0].substr(1),'000')),
                program: [element['attributes'][1].value.split("-")[0]]
            }
        });
    })
    .then(fn)
    .catch(error => {
        console.error('Search failed:', error)
    });
}

module.exports = {
    scrape: scrape
}