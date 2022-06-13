function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
function First(){
    myDisplayer("Good Morning! Have a Nice Day");
}
function Second(){
    myDisplayer("Good Evening");
}
function Third(){
    myDisplayer("Good Night")
}

First();
Third();
Second();