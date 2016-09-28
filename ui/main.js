var counter = 0 ;

function bu(){
  counter= counter + 1 ; 
  var span =  document.getElementById('span');
  span.innerHTML = counter.toString();
  document.getElementById('span').innerHTML = counter.toString();
  alert(counter);
}



