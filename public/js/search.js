$( document ).ready( function() {

	$('#PopularCategories a').click(function(){

			var category = $(this).attr("cat");

			if (category != "") {

				var filterer = $("#searchForCollapsibleSetChildren");

			    filterer.val(category);
			    filterer.trigger("change");
			}
	});
});