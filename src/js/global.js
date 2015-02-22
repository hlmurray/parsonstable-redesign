function minFill(){
	var target = $(".wrapper");
	var footer = $('footer.js-subtract-fill');
	
	applyHeight();
	$(window).on("resize", applyHeight);
	
	function getTotal(){
		return $(window).height() - footer.outerHeight(includeMargin=true) - parseInt(target.css("padding-top")) - parseInt(target.css("padding-bottom"));
	}
	function applyHeight(){
		var fillHeight = getTotal();
		target.css({
				"min-height": fillHeight+"px"
		});
	}
}
minFill();