$(document).ready(function() {

	dragnDrop();

});

function dragnDrop() {
	$(".draggable").draggable( {

	});

	$(".droppable").droppable({

		 accept: ".card",
     
		drop: function(event, ui) {
      console.log($(ui.draggable).find('.card-title').html() +' card is moved to '+ $(this).attr('id'))

     var taskId = $(ui.draggable).data('task-id')
     var bucketName = $(this).attr('id')

     $.ajax({
     	url: '/tasks/'+ taskId,
     	method: 'put',
      dataType: 'script',
      data: {task: {status: bucketName}}

		}) 
   },
	
		over: function(event, ui) {
				$('.droppable.ui-state-highlight').removeClass("ui-state-highlight")
				$(this).addClass("ui-state-highlight")

		}
	});
}

