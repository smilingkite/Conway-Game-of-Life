$('td').on('click', function(e) {
	$(this).toggleClass('selected'); //you can list several class names
	e.preventDefault();
});
