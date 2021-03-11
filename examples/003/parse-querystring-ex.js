const querystring = require('querystring');

const url = 'https://www.matamath.net/views/v3/report/layout.jsp?token=7761745F743A3A63686172743A3A75303030303035313334323A3A313631353434343339373735347C6F54722B553478765659646766757573306235443449756E66644678394B744272424D68486D34683344733D';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?')+1));

console.log(`This website has token ${parsedUrl.token}`);
