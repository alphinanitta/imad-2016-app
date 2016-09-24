console.log('Loaded!');

window.onload= function(){
document.getElementById('main').innerHTML = 'New Value' ;

var marginLeft=0;

function right(){
    marginLeft=marginLeft+5;
    var img = document.getElementById('madi');
    img.style.marginLeft = marginLeft+'px'; 
}
document.getElementById('madi').onclick = function(){
    var interval = setInterval(right,50);
};

};