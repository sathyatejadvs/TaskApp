$(document).ready(function() {

	newLabel();

});

function newLabel() {
	$('.save').on('click', function() {
			console.log ("submitted form.")
		$.ajax({
			url: '/labels',
			method: 'POST',
			dataType: 'script'
		})
	});
}
