/* jshint strict: true */
/* global jQuery */

(function(site, $) {
    "use strict";


    function readMore() {

    	$('.js-read-more').on('click', function() {
    		var readmore = $(this),
	    		readmoreTarget = readmore.attr('href');

	    	$(readmoreTarget).on('shown.bs.collapse', function() {
	    		readmore.html('Less information ...');
	        });

	        $(readmoreTarget).on('hidden.bs.collapse', function() {
	    		readmore.html('More information ...');
	        });
    	});

    }

    site.helpers = site.helpers || {};
    site.helpers.readMore = readMore;

    site.registerInitFunction(readMore);

}(site, jQuery));
