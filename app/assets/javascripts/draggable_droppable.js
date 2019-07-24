
$(document).ready(function() {
	


	$(".draggable").draggable();
	$(".droppable").droppable({


		drop: function(event, ui) {
		$(this).addClass("ui-state-highlight")

		
		},
		over: function(event, ui) {
				$('.droppable.ui-state-highlight').removeClass("ui-state-highlight")
				$(this).addClass("ui-state-highlight")

		}
	});
	 
})