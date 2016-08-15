# require-cache-buster

Delete module from require cache and re-require it

### Install

    npm install require-cache-buster

### Usage

Node modules are singletons. You require it once and it is put in a cache. Sometimes, if your module has side effects like it reads from a configuration file, you may wish to refresh it. Do so like this:

    const requireCacheBuster = require('require-cache-buster')

    // initial require of something
    let something = require(__dirname + '../lib/something')
    something.do()

    // now it's time for a fresh version of something
    something = requireCacheBuster(__dirname + '../lib/something')
    something.do()

### Naming

Note: very hard to find a good name that isn't taken already on npm, so sorry for the shitty name.
