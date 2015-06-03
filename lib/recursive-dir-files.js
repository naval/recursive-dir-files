var fs = require('fs')
        , path = require('path')
        , files = []
        , dirs = []
        , file;

/**
 *  Read recursive all dirs and files
 * @param String start
 * @param Function cb
 */
module.exports=function read(start, cb) {
    fs.readdir(start, function (err, results) {
        if (err) {
            cb(err);
        }
        var pending = results.length;
        if (!pending) {
            return cb(null, dirs, files);
        }

        results.forEach(function (file) {
            file = path.resolve(start, file);
            fs.stat(file, function (err, stats) {
                if (err)
                    cb(err);
                if (stats && stats.isDirectory()) {
                    dirs.push(file);
                    walk(file, function (err, dirs, files) {
                        if (err) {
                            cb(err);
                        }
                        if (!--pending) {
                            cb(null, dirs, files);
                        }

                    });
                } else {
                    files.push(file);
                    if (!--pending) {
                        cb(null, dirs, files);
                    }
                }

            });
        });
    });
}
