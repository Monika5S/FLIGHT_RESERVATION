function setColor(btn) 
{
  //	changing selected button color
	var b=document.getElementById(btn);
	b.style.backgroundColor='coral';
	
	var b1=document.getElementById('b1');
	var b2=document.getElementById('b2');

	b==b1?b2.style.backgroundColor='white':b1.style.backgroundColor='white';
}

function getDetails()
{	
	localStorage.removeItem('flight_details');//removing previous flight_details if exists

	// to check if user have logged in 
	var data=localStorage.getItem('newPassenger');
	data=JSON.parse(data);
	if(data==null)
	{
		alert('Please Login to Book Flight');
		window.location.assign("/index.html");
	}

	else
	{
	   var valid=true;
	   var ccount=parseInt($('#Cpoints').val());//count of adult and children
	   var acount=parseInt($('#Apoints').val());

	  if(ccount==0&&acount==0)
	  {
		alert("Passenger Count Can't Be Zero");
		valid=false;
	  }

	  var tcount=ccount+acount;//total tickets

	  var cp=100*ccount;//ticket price for children 
	  var ap=200*acount;//ticket price for adults 

	  // additional charges for wifi and food
	  var add_chrg=0; 

	  var meal=document.getElementById("meal");
	  var wifi=document.getElementById("wifi");

	  if(meal.checked==true)
	  {
		add_chrg+=120;//predefined price
	  } 
	  if(wifi.checked==true) 
	  {
		add_chrg+=80;
	  }

	  //charges based on class
	  var cls="Economic";
	  if($('#sel1').val()=='Business')
	  {
		cp+=30;
		ap+=50;
		cls="Business";
	  }
	  else if($('#sel1').val()=='First class')
	  {
		cp+=50;
		ap+=100;
		cls="First Class";
	  }
	  else
	  {
		cp+=0;ap+=0;
	  }

	  var fp=cp+ap;//final price

	  var tax=100;
	  var tp=fp+add_chrg+tax;  //tp->Total price , 100Rs->tax


	  //ff->fly from , ft->fly to dt->departing time rt->returning time
	  var ff=$('#ff').val(),ft=$('#ft').val();
	  var dt=$('#depart').val(),rt=$('#rtn').val();
		
	  if(dt=="")
	  {
		alert('Please Enter Departing Date');
		valid=false;
	  }

	  // if roundtrip then returning date must be mentioned
	  var trip='OneWay';
	  if(b2.style.backgroundColor=='coral')
	  {   
		trip='RoundTrip';
		tp*=2;
 
		if(validate()==false)
		{
		  alert('Returning Date Is Invalid!!!');
		  valid=false;
		}
	 }

	  //json object to store details regarding flight 
	  var details={
		  name:data['name'],
		  email:data['email'],
		  trip:trip,
		  class:cls,
		  flyfrom:ff,
		  flyto:ft,
		  total_ticket:tcount,
		  ct_price:cp,
		  at_price:ap,
		  final_price:fp,
		  add_price:add_chrg,
		  tax:tax,
		  total_price:tp,
		  depart_date:dt,
		  return_date:rt,
		  flight_number:'IND'+parseInt(Math.random()*50+100),
		  status:'not_booked'
	  }

	  details=JSON.stringify(details);
	  localStorage.setItem('flight_details', details); 

	  if(valid!=false)//details are not invalid
	  {
		window.location.assign("/myflight/ticket_price/pricing.html");
	  }
	}
}

function validate() //checking if the returningn date is valid
{
  var depart_date=new Date($('#depart').val());
  var dt1=depart_date.getDate();
  var mn1=depart_date.getMonth();
  var yr1=depart_date.getFullYear();

  var rtn_date=new Date($('#rtn').val());
  var dt2=rtn_date.getDate();
  var mn2=rtn_date.getMonth();
  var yr2=rtn_date.getFullYear();
  
    if((yr2==yr1 || yr2>yr1) && (mn2==mn1 || mn2>mn1 ) && dt2>dt1 )
    {
      return true;
    }
	if(yr2>yr1)
	{
		return true;
	}
  return false;  
}

window.onload=function()
{
	document.getElementById('depart').min= new Date(new Date().getTime()-new Date().getTimezoneOffset()*60000).toISOString().split("T")[0];
	document.getElementById('rtn').min= new Date(new Date().getTime()-new Date().getTimezoneOffset()*60000).toISOString().split("T")[0];

}