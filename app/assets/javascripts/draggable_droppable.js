
$(document).ready(function() {
	


	$(".draggable").draggable();
	$(".droppable").droppable({


		drop: function(event, ui) {
      console.log( 'Card was moved to '+ $(this).attr('id'))
		},
		over: function(event, ui) {
				$('.droppable.ui-state-highlight').removeClass("ui-state-highlight")
				$(this).addClass("ui-state-highlight")

		}
	});
	 
})
