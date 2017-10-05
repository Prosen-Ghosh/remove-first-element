const removeFirst = (function(){
    'use strict';
    const fn = function(ar){
        if(Object.prototype.toString.call(ar).toLowerCase() !== '[object array]'){
            throw new TypeError('removeFirst() expects an array parameter');
        }
        return ar.length > 0 ? ar.shift() : null;
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = removeFirst;
}