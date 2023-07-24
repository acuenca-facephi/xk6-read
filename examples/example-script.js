import read from 'k6/x/read'; 

// change file/directory paths
const FILE_PATH = '/mnt/c/projects/other/test-directory/textOutput2.txt';
const DIRECTORY_PATH = '/mnt/c/projects/other/test-directory';

function readFile(file) {
    console.log(file.path + ': ' + file.content);
}

function readDirectory(directory) {
    console.log('directory :' + directory.path);
    for (let i = 0; i < directory.content.length; i++) {
        const item = directory.content[i];
        if (Array.isArray(item.content)) readDirectory(item);
        else readFile(item);
    }
}

export default function () {
    let file = read.readFile(FILE_PATH);
    //console.log(JSON.stringify(file));
    readFile(file);

    let directory = read.readDirectory(DIRECTORY_PATH);
    //console.log(JSON.stringify(directory));
    readDirectory(directory);
}
