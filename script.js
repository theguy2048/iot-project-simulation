var entry = document.getElementById("entry-gate");
var exit = document.getElementById("exit-gate");
var count = parseInt(document.getElementById("count").innerHTML);

function addCount(){
  count = count + 1;
  Materialize.toast('A customer has entered the store', 2000);
  $("#ppl").append('<i class="fa fa-street-view"></i>'); 
  document.getElementById("count").innerHTML = count;
  if (count <= 10){$("#alert").hide();}
  else {$('#alert').show();}

  rootRef.child("count").set(count);
}

function delCount(){
  count = count - 1;
  Materialize.toast('A customer has left the store', 2000);
  $("#ppl").children().last().remove();
  document.getElementById("count").innerHTML = count;
  if (count <= 10){$("#alert").hide();}
  else {$('#alert').show();} 
  
  rootRef.child("count").set(count);  
}

function resetCount(){
  count = 0;
  document.getElementById("count").innerHTML = count;
  const myNode = document.getElementById("ppl");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  
  
  rootRef.child("count").set(count);
}




