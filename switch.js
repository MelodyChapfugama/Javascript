
var cars = ["BMW", "land rover", "skoroskoro", "lexus"];
  switch(cars[2]){

  case "land rover":
    document.getElementById("demo").innerHTML = "land rovers are here!";
    break;

  case " lexus":
    document.getElementById("demo1").innerHTML = "lexus is here!";
    break;

    case "skoroskoro":
    document.getElementById("demo1").innerHTML = "skoroskoro is here!";
    break;

  default :
    document.getElementById("demo2").innerHTML = "no land rover or lexus!";



  }
