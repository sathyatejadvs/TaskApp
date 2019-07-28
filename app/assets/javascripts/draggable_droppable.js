$(document).ready(function() {

	dragnDrop();

});

function dragnDrop() {
	$(".draggable").draggable( {
  	axis:'x'
	});

	$(".droppable").droppable({
		drop: function(event, ui) {
      console.log($(ui.draggable).find('.card-title').html() +' card is moved to '+ $(this).attr('id'))

     var taskId = $(ui.draggable).data('task-id')
     $.ajax({
     	url: '/tasks/'+ taskId
		}) 
   },
	
		over: function(event, ui) {
				$('.droppable.ui-state-highlight').removeClass("ui-state-highlight")
				$(this).addClass("ui-state-highlight")

		}
	});
}