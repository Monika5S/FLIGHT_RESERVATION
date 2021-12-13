function passengerinfo()
{
    var username= $("#username").val();
    var email= $("#email").val();
    var departdate= $("#departdate").val();
    var Flightnumber= $("#Flightnumber").val();
    
 
    var details=localStorage.getItem('flight_details'); 

    details=JSON.parse(details);
    if(details==null){
        alert('passenger info not found');
    }
    
    else if(username==details['name'] && email==details['email'] && departdate==details['depart_date'] && Flightnumber==details['flight_number'])
    {
       
       window.location.assign("/Passengerinfo/userdetails.html");

       
    }
    else
    {
        alert('passenger information not found');
        

    }


}
