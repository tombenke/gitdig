const expect = require('chai').expect
const config = require('./config')

before(function(done) {
    done()
})

after(function() {
})

describe('config', function() {

    it('config.getDefaults()', function(done) {
        const expected = {
            configFileName: '.gitdig_config.yml',
            offline: false,
            debug: false,
            snapshotFile: '.gitdig_snapshot.json',
            find: {
                owners: []
            },
            ignore: {
                repositories: []
            },
            export: {
                externals: true
            },
            "dependencies": {
                "blacklist": [],
                "whitelist": []
            }
        }
        const defaults = config.getDefaults()
        expect(defaults).to.eql(expected)
        done()
    })
})
