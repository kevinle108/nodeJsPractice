const https = require('https');
const username = 'kevinle6';

function printMessage(username, badgeCount, points) {
  const msg = `${username} has ${badgeCount} total badges and ${points} points in Javascript`;
  console.log(msg);
}

function getProfile(username) {
  const request = https.get(`https://teamtreehouse.com/${username}.json`, resp => {
    //console.log('statusCode:', resp.statusCode);
    //console.log('headers:', resp.headers);
    let body = '';
    resp.on('data', d => body += d.toString());
    resp.on('end', () => {
      const profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    });
  });
}

//const users = [ 'kevinle6', 'chalkers', 'davemcfarland'];
//users.forEach(user => getProfile(user));
let [a, b, ...rest] = process.argv;
rest.forEach(user => getProfile(user));