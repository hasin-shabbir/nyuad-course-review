const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

const scrape = async (fn, inCode) => {
    const uinput = inCode;
    await nightmare
    .goto('https://nyuad.nyu.edu/en/course-list.html')
    .wait('.item')
    .evaluate(function(userinput) {
        let xpath = `//li[@data-peoplesoftid='${userinput}']`
        let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        // var elements = Array.from(document.getElementsByClassName('item'));
        // return elements.map(function(element) {
        //     return {
        //         code: element['attributes'][1].value,
        //         name: element.innerText,
        //         level: parseInt(element['attributes'][1].value.match(/(\d+)/)[0].replace(element['attributes'][1].value.match(/(\d+)/)[0].substr(1),'000')),
        //         program: [element['attributes'][1].value.split("-")[0]]
        //     }
        // }
        // );
        if (!(element)){
            return undefined;
        }
        return {
            code: element['attributes'][1].value,
            name: element.innerText,
            level: parseInt(element['attributes'][1].value.match(/(\d+)/)[0].replace(element['attributes'][1].value.match(/(\d+)/)[0].substr(1),'000')),
            program: [element['attributes'][1].value.split("-")[0]]
        }
    },uinput)
    .then(fn)
    .catch(error => {
        console.error('Search failed:', error);
    });
}

module.exports = {
    scrape: scrape
}
