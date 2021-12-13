function validate(){
  
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;
  var corr;
  error_message.style.padding = "10px";
  
  if(name.length < 3){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  var fname = /^[a-zA-Z ]+$/;
       
  if (!name.match(fname)) {
  text = "Please Enter valid Name";
  error_message.innerHTML = text;
  return false;	    
  }
  
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <= 40){
    text = "Please Enter More Than 40 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}