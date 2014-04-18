$( document ).on( "pagecreate", function() {
$.mobile.collapsible.prototype.options.collapsed = false;
	//expandcollapsables();
	//$('#FictionCat').collapsible( "expand" );

	function filterbycat() {
		
		var filterer = $("#searchForCollapsibleSetChildren");
	    var filter_val = filterer.val();
	    var filter_query = filter_val+category;

	    filterer.val(filter_query);
	    filterer.trigger("change");
	}

	function expandcollapsables() {

		var collapsible = $("#Collapsibles");

		collapsible.each(function() {
	        var coll = $(this);
	        coll.trigger('expand');
	    });
	}

	$('#PopularCategories a').click(function(){

			category = $(this).attr("cat");

			if (category != "") {
				filterbycat();
			}
	});

});

$( document ).bind( "mobileinit", function(){
    $.mobile.collapsible.prototype.options.collapsed = false;
});