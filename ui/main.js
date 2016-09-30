
function bu(){
  var request = new XMLHttpRequest();
  
  request.onreadystatechange   = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
            var counter = request.responseText;
            var span =  document.getElementById('span');
            span.innerHTML = counter.toString();
        }
    }  
  };
  request.open('GET','http://alphinanitta.imad.hasura-app.io/counter',true);
  request.send(null);
}

var  name = document.getElementByID('name').value;

document.getElementById('submit').onclick = function(){
    
    
    var names = ['name1','name2','name3','ADP'];
    var list = '';
    for(var i=0 ; i < names.length ; i++){
        list += '<li>' + names[i] + '</li>';
        
    }
document.getElementById('namelist').innerHTML = list ;
};
