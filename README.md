recursive-dir-files
=================
Read recursive directories and files


[![npm](https://img.shields.io/npm/dm/recursive-dir-files.svg?style=flat-square)](https://www.npmjs.com/package/recursive-dir-files)
[![Travis](https://img.shields.io/travis/naval/recursive-dir-files.svg?style=flat-square)](https://travis-ci.org/naval/recursive-dir-files)
[![node](https://img.shields.io/node/v/recursive-dir-files.svg?style=flat-square)](https://nodejs.org/)

**Features**
- Read recursive directories and files


### Example

    var  recursiveDirFiles= require('recursive-dir-files');
    

    // create database dump sql file
    var start = __dirname;
     recursiveDirFiles(start, function (err, dirs, files) {
            if (err) {
                console.log(err);
            }
            console.log("Directories=",dirs);
            console.log("Files=",files);
        });
