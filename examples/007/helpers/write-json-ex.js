const fs = require('fs');

const JSON_WHITESPACE = 4;

const writeJson = (file, contents) => {
    return new Promise((res, rej) => {
        fs.writeFile(file, JSON.stringify(contents, null, JSON_WHITESPACE), (err) => {
            if(err){
                rej(err);
            }
            res(`${file} written`);
        });

    });
}
module.exports = writeJson;