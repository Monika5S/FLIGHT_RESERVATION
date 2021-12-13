function cancelflight()
{
    var email= $("#email").val();
    var departdate= $("#departdate").val();
    var Flightnumber= $("#Flightnumber").val();
    //alert(username);
 
    var details=localStorage.getItem('flight_details'); 
   // alert(details);
    details=JSON.parse(details);
    if(details==null){
        alert('passenger info not found');
    }
    else if(email==details['email']  && departdate==details['depart_date'] && Flightnumber==details['flight_number'])
    {
       alert('Your flight is cancelled');
       window.localStorage.removeItem('flight_details');
       // window.localStorage.clear()

       
    }
    else
    {
        alert('passenger information not found');
    }


}