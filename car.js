// GET - https://enterpriseservice.pullapart.com/Location
// GET - https://inventoryservice.pullapart.com/Make/
// GET - https://inventoryservice.pullapart.com/Model?makeID={{MAKEID}}
// POST - https://inventoryservice.pullapart.com/Vehicle/Search
const locationURL = 'https://enterpriseservice.pullapart.com/Location';
const makeURL = 'https://inventoryservice.pullapart.com/Make/';

const https = require('https');
const colors = require('colors');


getLocationData(locationURL);
// getMakeData(makeURL);

function getLocationData(locationURL) {
    https.get('https://enterpriseservice.pullapart.com/Location', response => {
        console.log(response.statusCode);
        let body = '';
        response.on('data', data => body += data.toString());
        response.on('end', () => {
            const data = JSON.parse(body);
            data.forEach(location => {
                // console.log('hello'.green)
                console.log(`${location.locationID}:`.green + ` ${location.locationName}`.red);
            });
        });
    })
}

function getMakeData(makeURL) {
    https.get('https://inventoryservice.pullapart.com/Make/', response => {
        console.log(response.statusCode);
        let body = '';
        response.on('data', data => body += data.toString());
        response.on('end', () => {
            const data = JSON.parse(body);            
            data.forEach(make => {
                console.log(`${make.makeID}: ${make.makeName}`);
            });
        });
    })
}

