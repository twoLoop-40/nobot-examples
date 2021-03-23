const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');

const logOut = (message) => {
    console.log(message);
    process.exit(0);
};

const nameCheck = (enteredName, stopProcess) => {
    const outMessage = 'Cannot create a project without a name';
    let name = enteredName.trim();
    return name? name : stopProcess(outMessage);
};

const makeDir = (projectName, stopProcess) => {
    let projectPath = path.join(__dirname, projectName);
    const message = `${projectPath} already exits`;

    if (fs.existsSync(projectPath)){
        stopProcess(message);
    } else{
        console.log(`creating a new project called ${projectName}`);
        fs.mkdirSync(projectPath);
    }
};

const createProjectDirectory = ((nameHandle, dirHandle) => (enteredName) =>{
    let projectName = nameHandle(enteredName, logOut);
    return dirHandle(projectName, logOut);
})(nameCheck, makeDir);

const onProjectInput = (name) => {
    interfaceInstance.close();
    stdin.destroy();
    createProjectDirectory(name);
  };
const interfaceInstance = readline.createInterface(stdin, stdout);

interfaceInstance.question('What is the name of your project? ', onProjectInput);

    
