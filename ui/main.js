
function bu(){
  var request = new XMLHttpRequest();
  
  request.onreadystatechange   = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
            var names = request.responseText;
            names = JSON.parse(names);
            var list='';
            for (var i = 0 ;i <  names.length ; i++){
                list += '<li>' + names[i] + '</li>';
            }
            (document.getElementById('ul')).innerHTML = list ; 
        }
    }  
  };
  var name = document.getEl;ementById('nameInput').value;
  var comment = document.getEl;ementById('comment').value;
  request.open('GET','http://alphinanitta.imad.hasura-app.io/submit-name?name='+ name + '' & ''+ comment + '' , true);
  request.send(null);
}


