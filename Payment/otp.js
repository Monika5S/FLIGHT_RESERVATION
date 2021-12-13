var otp=parseInt(Math.random()*100000+500000);
window.onload=function()
{
    alert("Your 6 digit OTP is, "+ otp);
}
function validateform()
{
    var otp1=$("#otp").val();
    var valid=true;

    if(otp1.toString().length<6)
    {
        alert("Otp must be atleast 6 digits.....");
        valid= false;
    }
    else if(otp1!=otp)
    {
        alert("Otp doesn't Match!!!");
        valid=false;
    }
    if(valid==true)
    {
        alert("Congratulations!!Your Ticket is successfully booked.");
        var details=localStorage.getItem('flight_details'); 
        details=JSON.parse(details);
        details['status']='booked';
        details=JSON.stringify(details);
        localStorage.setItem('flight_details', details); 
        
        window.location.assign("/index.html");
    }

}