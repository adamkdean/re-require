# re-require

Delete module from require cache and re-require it

### Install

    npm install re-require

### Usage

Node modules are singletons. You require it once and it is put in a cache. Sometimes, if your module has side effects like it reads from a configuration file, you may wish to refresh it. Do so like this:

    const reRequire = require('re-require')

    // initial require of something
    let something = require(__dirname + '../lib/something')
    something.do()

    // now it's time for a fresh version of something
    something = reRequire(__dirname + '../lib/something')
    something.do()
