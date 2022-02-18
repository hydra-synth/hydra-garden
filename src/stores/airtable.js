var Airtable = require('airtable');

// read-only API key from rhizomaticode
var base = new Airtable({apiKey: 'keyRHmFMa5W4S4TUJ'}).base('app1AzaEIEVOFm3nN');

base('Links').select({
    // Selecting the first 3 records in Grid view:
    // maxRecords: 1000,
    pageSize: 5,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach((record) => { console.log(record.fields) })
   console.log('got records', records, fetchNextPage)
    // records.forEach(function(record) {
    //     console.log('Retrieved', record, record.get('Title'));
    // });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});