
function bu(){
  var request = new XMLHttpRequest();
  
  request.onreadystatechange   = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status===200){
            var comments = request.responseText;
            comments = JSON.parse(comments);
            var list='';
            for (var i = 0 ;i <  comments.length ; i++){
                list += '<li>' + comments[i] + '</li>';
            }
            (document.getElementById('ul')).innerHTML = list ; 
        }
    }  
  };
  var comment = document.getElementById('commen').value;
  request.open('GET','http://alphinanitta.imad.hasura-app.io/submit-name?name='+ comment + '' , true);
  request.send(null);
}


