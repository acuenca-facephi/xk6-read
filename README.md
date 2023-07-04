# xk6-read
[k6](https://github.com/grafana/k6) extension for reading files and directories, implemented using the
[xk6](https://github.com/grafana/xk6) system.  
Inspired in the [writing files k6 extension](https://github.com/avitalique/xk6-file).

## Build
```shell
xk6 build v0.36.0 --with github.com/acuenca-facephi/xk6-read@latest
```

## Example
```javascript
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
```

## Run example script
```shell
./k6 run example-script.js
```
