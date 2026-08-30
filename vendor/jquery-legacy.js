/*!
 * jQuery JavaScript Library v1.12.4
 * https://jquery.com/
 * Copyright jQuery Foundation
 * Released under the MIT license
 */

(function (window) {
    function jQuery(selector) {
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = jQuery.prototype = {
        jquery: "1.12.4",
        constructor: jQuery,

        init: function (selector) {
            this.selector = selector;
            return this;
        }
    };

    jQuery.fn.init.prototype = jQuery.fn;

    window.jQuery = window.$ = jQuery;
})(window);
