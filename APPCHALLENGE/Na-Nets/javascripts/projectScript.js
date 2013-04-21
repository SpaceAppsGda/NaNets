$(document).ready(function(){
$('.cohetes').click( function(event){
	$('.cohetes').each(function(index, element) {
        $(element).removeAttr('id');
    });
	$(this).attr('id','emotionselected')
	
	});
	
$('#enviar').click( function(event){
	event.preventDefault();
	$('#feedback').removeAttr('class');
	$('#name').val('Batman');
	$('#message').val($('.eight').val());
	
	 });
	
});