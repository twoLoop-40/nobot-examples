const path = require('path');
// helpers
const writeJson = require('./helpers/write-json-ex');
const getJiraData = require('./helpers/get-jira-data-ex');

// from terminal
const args = process.argv.slice(2);
const [ticket] = args;

const CONFIG_FILE = 'config-ex.json';
const jiraTicket = ticket || 'GS-1000';

const getTicket = (getData, wf) => data => {
    const jiraData = getData(data);
    if(jiraData === undefined){
        console.log(`JIRA ticket ${data} not found`);
        process.exit(0);
    }
    const newConfigFile = path.join(__dirname, 'data', CONFIG_FILE);

    wf(newConfigFile, jiraData)
        .then(msg => console.log(msg))
        .catch((err) => {throw err;});
};

getTicket(getJiraData, writeJson)(jiraTicket);
