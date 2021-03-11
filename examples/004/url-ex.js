

const givenUrl = 'https://www.matamath.net/views/v2/jsp/studyroom/view_exam.jsp?token=7761745F743A3A6578303030303533333739393A3A6D6174613231303536363A3A6C63303030303034373039363A3A313631353434343935373734367C5563507A7949316747723139424C61676430544E7641527432533448746D71626845307130585A2B32554D3D#';

if (givenUrl === undefined){
    console.error('Please pass a URL e.g. https://www.google.co.uk/search?q=stranger+things');
    process.exit(0);
}

const {
    protocol, slashes, host, query, href
} = new URL(givenUrl);

console.log(`Using protocol: ${protocol}`);
console.log(`Using slashes: ${slashes}`);
console.log(`Host: ${host}`);
console.log(`Query: ${query}`);
console.log(`HREF: ${href}`);

