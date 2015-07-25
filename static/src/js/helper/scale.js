/* jshint strict: true */
/* global jQuery */

(function(site){
    "use strict";

    function fixScaleBug() {

        window.MBP = window.MBP || {};
        MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
        MBP.ua = navigator.userAgent;

        MBP.scaleFix = function() {
            if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
                MBP.viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
                document.addEventListener('gesturestart', MBP.gestureStart, false);
            }
        };

        MBP.gestureStart = function() {
            MBP.viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        };

        MBP.scaleFix();
    }

    site.helpers = site.helpers || {};
    site.helpers.fixScaleBug = fixScaleBug;

    site.registerInitFunction(fixScaleBug);

}(site));
