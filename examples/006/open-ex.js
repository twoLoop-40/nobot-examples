const { platform } = require('os');
const { exec } = require('child_process');

const WINDOWS_PLATFORM = 'win32';
const MAC_PLATFORM = 'darwin';

const osPlatform = platform()
const args = process.argv.slice(2);
const [url] = args;

const isUrl = _url => {
    if(_url === undefined){
        console.error('Please enter a URL, e.g. "http://www.opencanvas.co.uk"');
        process.exit(0);
    }
};
isUrl(url);

let command = (
    opf => {
        if(opf === WINDOWS_PLATFORM) return `start microsoft-edge:${url}`;
        else if(opf === MAC_PLATFORM) return `open -a "Google Chrome" ${url}`;
        else return `firefox ${url}`;
    }
)(osPlatform);

(str => console.log(`excuting command: ${str}`))(command);
exec(command);

