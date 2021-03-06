/* Detect if mocha is running.
 */

/* example
 * detectMocha(); // -> True if mocha is running.
 */

/* module
 * env: all
 * test: all
 */

_('root');

exports = function() {
    for (var i = 0, len = methods.length; i < len; i++) {
        var method = methods[i];

        if (typeof root[method] !== 'function') return false;
    }

    return true;
};

var methods = ['afterEach', 'after', 'beforeEach', 'before', 'describe', 'it'];
