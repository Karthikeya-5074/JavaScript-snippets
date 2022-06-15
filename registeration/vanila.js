form = document.getElementById("myform");
function validateform(event) {
  event.preventDefault();
  var FirstName = document.myform.fname.value;
  var LastName = document.myform.lname.value;
  var email = document.myform.email.value;
  var password = document.myform.pass.value;
  var repass = document.myform.repass.value;
  var state = document.myform.state.value;
  var gender = document.myform.gender;
  var address = document.myform.address.value;
  var lan = document.getElementsByName("lan");
  var atposition = email.indexOf("@");
  var dotpostion = email.lastIndexOf(".");
  var data = new Object();
  var i;
  var langArray = new Array();
  for (i = 0; i < lan.length; i++) {
    if (lan[i].checked) {
      langArray.push(lan[i].value);
    }
  }
  if (FirstName == null || FirstName == "" || LastName == null || LastName == "") {
    alert("Please fill the Required Fields");
    return false;
  }else if (
    atposition < 1 ||
    dotpostion < atposition + 2 ||
    dotpostion + 2 >= email.length
  ) {
    alert("enter a valid e-mail address");
    return false;
  } else if (password.length < 6) {
    alert("Enter atleast 6 characters of length");
    return false;
  } 
  else if(password!=repass){  
      alert("password must be same!");  
      return false;  
      }    
  else if (state == "select") {
    alert("Please Select State");
    return false;
  } else if (gender.value == "") {
    alert("Please Select Gender.");
    return false;
  } else if (address == "") {
    alert("Please Provide Address");
  }
  // if (langArray.length == 0) {
  //   alert("Please select lang");
  //   return false;
  // }
  // if (valid) {
  //   alert("Please Select Language.");
  //   return false;
  // }
  // else if (!this.myform.checkbox.checked) {
  //   alert("Please Select Language.");
  //   return false;
  // }
  // for (i = 0; i < gender.length; i++) {
  //   if (gender[i].checked) {
  //     data.gender = gender[i].value;
  //   }
  //   if (gender[i].checked == false) {
  //     alert("Please select gender.");
  //     return false;
  //   }
  // }

  data.fname = fname;
  data.lname= lname;
  data.email = email;
  data.password = password;
  data.repass=repass;
  data.state = state;
  data.gender = gender.value;
  data.lan = langArray;
  data.address = address;
  console.log(data);
}
form.addEventListener("submit", validateform);
