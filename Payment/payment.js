function validateform(){  
    var name=$('#name').val();  
    var number=$('#number').val();  
    var cvv=$('#cvv').val();
    var valid=true;
    var fname = /^[a-zA-Z ]+$/;
	
    if (name==null || name==""){  
      alert("Name can't be blank");  
        valid=false;
    }
    else if (!name.match(fname)) {
      text = "Please Enter valid Name";
      alert(text);
      valid=false;	    
		}
    else if(number.length<16){  
      alert("Card number must be at least 16 digits long.");  
         valid=false;
      }  
    else if (cvv.length<3){
          alert("CVV number must be atleast 3 digit long.");
          valid=false;
      }
  
    if(valid==true)
    {
      window.location.assign("/Payment/otp.html");
    }

}

window.onload=function(){
var details=localStorage.getItem('flight_details'); 
details=JSON.parse(details);

var a=document.getElementById('p1');

$("#amount").text(details['total_price']+" Rs");
}