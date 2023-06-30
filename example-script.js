import read from 'k6/x/read'; 

// change file/directory paths
const filePath = '/dummy/path/to/file.txt';
const directoryPath = '/dummy/path/to/directory';

export default function () {
    // read file
    let fileContent = read.readFile(filePath);
    console.log(JSON.stringify(fileContent));
    
    // read directory
    let directoryContent = read.readDirectory(directoryPath);
    console.log(JSON.stringify(directoryContent));
}
