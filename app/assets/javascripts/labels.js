$(document).ready(function() {
  $(document).on('submit', 'form.new_label', createLabel) 

});

function createLabel(e) {
  e.preventDefault();
  var formData = $( this ).serialize();

  $.ajax({
    url: '/labels',
    method: 'POST',
    dataType: 'json',
    success: function(data, textStatus, jqXHR){
    $('#label').append('');

    },
    data: formData
  })
}
