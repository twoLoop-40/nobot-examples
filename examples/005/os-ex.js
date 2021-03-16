const os = require('os');

const homeDirectory = os.homedir();
console.groupCollapsed(`Your home directory is: ${homeDirectory}`);

const osPlatform = os.platform();
(str => console.log(`The OS platform is: ${str}`))(osPlatform);

const cpuCores = os.cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;

((str1, str2) => console.log(`I can see your ${str1} has ${str2} cores.`))(cpuModel, coreCount);