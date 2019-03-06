var Students = ["spa", "rumbi" , "shalom" , "vimbai" , "tau" , "joy" , "melody" , "tatenda" , "gracious" , "yvonne", "fortunate" , "patricia"];
var text="<ul>";

for (i=0; i<Students.length; i++){
  text += "<li>" + Students[i] + "</li>" +"<br>";
}
text += "</ul>"
document.write( text );
