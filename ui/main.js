
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


