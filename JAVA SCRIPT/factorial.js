function fact(){  

  var initialnum, inputnum,fact;

  fact = 1;  

  inputnum = document.getElementById("num").value;  

  for(initialnum = 1; initialnum <= inputnum; initialnum++)    

  {  

  fact = fact * initialnum;  

  }

  initialnum = initialnum - 1;  

  document.getElementById("res").innerHTML = "The factorial of the number " + initialnum + " is: " + fact ;
  document.getElementById("res1").innerHTML = alert("The factorial of the number " + initialnum + " is: " + fact );  

}  