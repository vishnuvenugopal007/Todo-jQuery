// Check off Specific Todos by Clicking
$('li').click(function(){
  $(this).toggleClass('completed')
})

//Click on X to Delete Todos

$('span').click(function(){
  $(this).parent().fadeOut(500, function(){
    $(this).remove()
  })
  event.stopPropagation()
})
