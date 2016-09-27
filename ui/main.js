
var counter = 0 ; 
document.getElementById('counter').onclick = function(){
  counter= counter + 1 ; 
  document.getElementById('count').innerHTML = counter.toString();
};