const { SearchIndexClient, SearchClient, AzureKeyCredential, odata } = require("@azure/search-documents");

// Load the .env file if it exists
require("dotenv").config();

// Getting endpoint and apiKey from .env file
const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";


async function sendQueries(searchClient, keyWords) {
    let searchOptions = {
        includeTotalCount: true,
        select: [],
        queryType: "full"
    };

    let searchResults = await searchClient.search(keyWords, searchOptions);
    for await (const result of searchResults.results) {
        console.log(`${JSON.stringify(result.document)}`);
    }
    console.log(`Result count: ${searchResults.count}`);

    const searchResultsObj = {
        documentCount: searchResults.count,
        results: searchResults
    }
    return searchResultsObj;
}

// EXAMPLE OF HOW TO USE THIS
// const searchClient = new SearchClient(endpoint, "azureblob-index", new AzureKeyCredential(apiKey));

// sendQueries(searchClient).then((res)=>{
//     res is searchResultsObj
//     console.log(res);
// });

module.exports = sendQueries;