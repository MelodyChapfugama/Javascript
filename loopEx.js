var cars = ["BMW", "benz" , "audi" , "VW" , "ruff"];
var text="<ul>";

for (i=0; i < 4; i++){
  text += "<li>" + cars[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;



var cars = ["BMW", "benz" , "audi" , "VW" , "ruff"];
var i = 0;
var text ="<ul> ";
  while (i<4){
  text += "<li>" + cars[i] + "</li>" + "<br> ";
  i++;
}
 text += "</ul>"
document.getElementById("demo1").innerHTML = text;


var cars = ["BMW", "benz" , "audi" , "VW" , "ruff"];
var i = 0;
var text ="<ul> ";
  do {
  text += "<li>" + cars[i] + "</li>" + "<br> ";
  i++;
}
  while (i<4);
 text += "</ul>"
document.getElementById("demo2").innerHTML = text;
