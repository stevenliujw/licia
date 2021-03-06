/* Check if value is classified as a Date object.
 *
 * |Name  |Type   |Desc                          |
 * |------|-------|------------------------------|
 * |val   |*      |value to check                |
 * |return|boolean|True if value is a Date object|
 */

/* example
 * isDate(new Date()); // -> true
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Date]';
};
