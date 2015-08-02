/* jshint strict: true */
/* global jQuery */

(function(site, $) {
    "use strict";


    function initHcSticky() {
        $('.content-aside').hcSticky();
    }

    site.helpers = site.helpers || {};
    site.helpers.initHcSticky = initHcSticky;

    site.registerInitFunction(initHcSticky);

}(site, jQuery));
