# xk6-read
[k6](https://github.com/grafana/k6) extension for reading files and directories, implemented using the
[xk6](https://github.com/grafana/xk6) system.  
Inspired in the [writing files k6 extension](https://github.com/avitalique/xk6-file).

## Build
```shell
xk6 build v0.45.0 --with github.com/acuenca-facephi/xk6-read@latest
```
### Local build
```shell
xk6 build v0.45.0 --with github.com/acuenca-facephi/xk6-read="/mnt/c/projects/other/xk6-read"
```

## Example
```javascript
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
```

## Run example script
```shell
./k6 run examples/example-script.js
```

## Docker

### Build
```shell
docker build -t adriancuenca/xk6-read:v1.0.0-rc1 .
```
### Run
```shell
docker run -v "/path/to/scripts:/scripts" \
-it --rm adriancuenca/xk6-read:v1.0.0-rc1 \
run /scripts/enroll_thousand_faces-xk6.js
```
