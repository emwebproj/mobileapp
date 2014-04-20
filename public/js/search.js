$( document ).on( "pagecreate", function() {

	$('#PopularCategories a').click(function(){

			var category = $(this).attr("cat");

			if (category != "") {
				filterbycat(category);
			}
	});

	function filterbycat(cat) {
		
		var filterer = $("#searchForCollapsibleSetChildren");

    filterer.val(cat);
    filterer.trigger("change");
	}

	function expandcollapsables() {

		var collapsible = $("#Collapsibles");

		collapsible.each(function() {
	        var coll = $(this);
	        coll.trigger('expand');
	    });
	}

});

$( document ).bind( "mobileinit", function(){
    $.mobile.collapsible.prototype.options.collapsed = false;
});