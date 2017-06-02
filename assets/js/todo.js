/* global $ */
// Check off Specific Todos by Clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed')
})

//Click on X to Delete Todos

$('ul').on('click', 'span', function(){
  $(this).parent().fadeOut(500, function(){
    $(this).remove()
  })
  event.stopPropagation()
})

$('input[type = text]').keypress(function(event){
  if(event.which === 13){
    //saving the new todo text to a variable
    var todoText = $(this).val()
    $(this).val('')
    //creating a new li and adding it to the ul
    $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + '</li>')
  }
})
