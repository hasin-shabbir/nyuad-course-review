const data = require("../data/courses").data;

//mock scraper for nyuad course list
//a realtime scrapper would need background tasks being enabled on deployment server
//a sample working implementation in local environment is saved in services/realScraper.js
const scrape = async (fn) => {
    fn(data);   
}

module.exports = {
    scrape: scrape
}