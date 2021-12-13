window.onload=function(){
    var details=localStorage.getItem('flight_details'); 
    // alert(details);
    details=JSON.parse(details);
    
    $('#tickets').text(details['total_ticket']);
    $('#ct_price').text(details['ct_price']+" Rs");
    $('#at_price').text(details['at_price']+" Rs");
    $('#final_price').text(details['final_price']+" Rs");
    $('#add_price').text(details['add_price']+" Rs");
    $('#tax').text(details['tax']+" Rs");
    $('#dprt').text(details['depart_date']);
    $('#ft_num').text(details['flight_number']);
    $('#total_price').text(details['total_price']+" Rs");
};
