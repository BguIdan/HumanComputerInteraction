$(document).ready(function() {
	$("[data-media]").on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var pic = $this.attr("data-media");
		var popup = $this.attr("href");
		var $popupIframe = $(popup).find("iframe");
		
		$popupIframe.attr("src", pic);
		
		$this.closest(".page").addClass("show-popup");
	});
	
	$(".popup").on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		$(".page").removeClass("show-popup");
	});
	
	$(".popup > iframe").on('click', function(e) {
		e.stopPropagation();
	});
});
