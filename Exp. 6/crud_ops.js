const { log } = require('console');
const fs = require('fs');
const path = './crud_data.txt';

// File creation
function createFile() {
    fs.writeFile(path, 'Initial file content.\n', (err) => {
        if (err) throw err;
        console.log('File created succesfully!');

    });
}
// Reading File data
function readFile() {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err)
            console.error('Error during reading of file!', err.message);
        else {
            console.log(' File content is\n', data);
        }
    })
}

// Update file content
function updateFile() {
    fs.appendFile(path, 'Hell,World! Wassup\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', (err) => {
        if (err) throw err;
        console.log('File content updated.');

    })
}

// Delete file content
function deleteFileContent() {
    fs.writeFile(path, '', (err) => {
        if (err) throw err;
        else {
            console.log('File content deleted(Cleared)!\n');

        }
    });
}

// Deleting Entire File
function deleteFile() {
    fs.unlink(path, (err) => {
        if (err) throw err;
        else {
            console.log("File deleted!");

        }
    })
}
// createFile();
// readFile();
// updateFile();
// readFile();
// deleteFileContent();
// readFile();
deleteFile();