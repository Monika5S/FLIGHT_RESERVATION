

var details=localStorage.getItem('flight_details'); 
details=JSON.parse(details);

$.each(details,function(key,value)
{
    //alert(key+" "+value);
    $('h3').append(key+" : "+value + "<br><br>");
})