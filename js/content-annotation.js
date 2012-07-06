  jQuery(function ($) {
	    if (typeof $.fn.annotator !== 'function') {
      alert("Ooops! it looks like you haven't built the Annotator concatenation file. " +
            "Either download a tagged release from GitHub, or modify the Cakefile to point " +
            "at your copy of the YUI compressor and run `cake package`.");
    } else {

      var content = $('.content .content').annotator();
      content.annotator('addPlugin', 'Permissions');
            //       .annotator('addPlugin', 'Markdown')
            //       .annotator('addPlugin', 'Tags');

      $('.content .content').data('annotator').plugins['Permissions'].setUser(Drupal.settings.annotateItVars.username);
      
      
      
      
      
      //store
      
      content.annotator('addPlugin', 'Store', {
	      // The endpoint of the store on your server.
	      prefix: '/annotations/store',
	
	      // Attach the uri of the current page to all annotations to allow search.
	      annotationData: {
	        'uri': Drupal.settings.annotateItVars.nid
	      },
	
	      // This will perform a "search" action rather than "read" when the plugin
	      // loads. Will request the last 20 annotations for the current url.
	      // eg. /store/endpoint/search?limit=20&uri=http://this/document/only
	      loadFromSearch: {
	        'limit': 20,
	        'uri': Drupal.settings.annotateItVars.nid
		      }
      	    });
	  }
   });