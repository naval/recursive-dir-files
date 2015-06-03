var assert = require('assert')
        , path = require('path')
        , recursiveDirFiles = require('../index');

describe('Read recursive directories and files', function () {
    var start = path.join(__dirname, 'test_dir');
    it('Should return dirs and files', function (done) {
        this.timeout(10000);
        recursiveDirFiles(start, function (err, dirs, files) {
            if (err) {
                done(err);
            }
            assert.ok(dirs.length,2);
            assert.ok(files.length,2);
            done();
        });

    });
});