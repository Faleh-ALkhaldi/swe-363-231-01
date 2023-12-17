/* This is an enhanced version of BE2-exercise_2.

I have improved usability and flexibility by adding two modes for running the program.

Option 1: Running the program in the terminal.
Option 2: Running the program in an IDE Run and Debug interface.

Also, the program can now copy more than one file extension.

Note: When running the program in the terminal,
make sure that you provide the absolute directories of the source folder and the target folder
both enclosed in double quotes "" or single quotes '' */



const fs = require('fs');
const path = require('path');
const readline = require('readline');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function to sanitize and return a valid path
function sanitizePath(inputPath) {
    return inputPath.trim().replace(/^["']|["']$/g, '');
}


// Function to copy files with the provided extensions
function copyFiles(source, target, extensions) {
    fs.readdir(source, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error('Error reading the source directory:', err);
            return;
        }

        entries.forEach(entry => {
            if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
                const sourcePath = path.join(source, entry.name);
                const targetPath = path.join(target, entry.name);
                fs.copyFile(sourcePath, targetPath, err => {
                    if (err) {
                        console.error('Error copying file:', err);
                    } else {
                        console.log(`File [ ${entry.name} ] is copied to the target directory: [ ${target} ]`);
                    }
                });
            }
        });
    });
}

// Function to prompt for running mode
function promptForMode() {
    rl.question('Choose the running mode: 1 (Terminal) or 2 (IDE): ', (mode) => {
        mode = mode.trim();
        if (mode === '1') {
            let [sourceDir, targetDir, ...extensions] = process.argv.slice(2);
            sourceDir = sanitizePath(sourceDir);
            targetDir = sanitizePath(targetDir);
            if (!sourceDir || !targetDir || extensions.length === 0) {
                console.error('Please provide source and target directories, and at least one file extension as command line arguments.');
                process.exit(1);
            }
            copyFiles(sourceDir, targetDir, extensions);
            rl.close();
        } else if (mode === '2') {
            rl.question('Enter the absolute source directory: ', (sourceDir) => {
                sourceDir = sanitizePath(sourceDir);
                rl.question('Enter the absolute target directory: ', (targetDir) => {
                    targetDir = sanitizePath(targetDir);
                    rl.question('Enter file extensions separated by space: ', (extInput) => {
                        const extensions = extInput.trim().split(/\s+/);
                        copyFiles(sourceDir, targetDir, extensions);
                        rl.close();
                    });
                });
            });
        } else {
            console.error('Invalid option. Please choose 1 or 2.');
            promptForMode();
        }
    });
}

promptForMode();
