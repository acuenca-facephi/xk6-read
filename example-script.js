import read from 'k6/x/read'; 

// change file/directory paths
const filePath = '/dummy/path/to/file.txt';
const directoryPath = '/dummy/path/to/directory';

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
    let file = read.readFile(filePath);
    //console.log(JSON.stringify(file));
    readFile(file);

    let directory = read.readDirectory(directoryPath);
    //console.log(JSON.stringify(directory));
    readDirectory(directory);
}
