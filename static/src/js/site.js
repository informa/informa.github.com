/*jslint browser:true */
/*global jQuery: false */

var site = (function ($) {
    "use strict";

    site = {
        initList: [],
        init: function () {
            $.each(site.initList, function(ind, f) { f(); });
        },
        /**
         * Register a function to be called on DOM ready
         *
         * @var function f
         */
        registerInitFunction: function (f) {
            site.initList.push(f);
        }
    };

    // Call all functions in site.initList when document loads
    $(site.init);

    return site;
}(jQuery));
