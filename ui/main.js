console.log('Loaded!');

window.onload= function(){
document.getElementById('main').innerHTML = 'New Value' ;
};


var img = document.getElementById('madi');

img.onclick = function(){
  img.style.marginLeft = '120px';  
};