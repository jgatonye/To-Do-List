function addListItem(){
  var text= $("#new-text").val();
  $("#toDoList").append('<li><input type="checkbox"class="finished">'+text+'<button type="button" class="done">Done</button></li>')
  $("#new-text").val("");
}
function alreadyDone(){
  $(this).parent().remove();
}
function complete(){
  if ($(this).parent().css('textDecoration')=== 'line-through'){
    $(this).parent().css('textDecoration', 'none')
  }else   $(this).parent().css("textDecoration", "line-through")
}


$(function(){
  $("#add").on("click", addListItem);
  $(document).on('click', '.done', alreadyDone);
  $(document).on('click', '.finished', complete);

});
