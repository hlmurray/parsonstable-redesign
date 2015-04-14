var $container = $('#container');
// initialize
$container.imagesLoaded(function() {
	$container.masonry({
		itemSelector: '.gallery-img',
		gutter: 15
	});
});