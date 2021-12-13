window.onload=function()
{
    var lgi=document.getElementById("lgi");
    var lgo=document.getElementById("lgo");

    var data=localStorage.getItem('newPassenger');
    data=JSON.parse(data);
    if(data==null)
    {
        lgo.style.display="none";
    }
    if(data["login"]=="true")
    {
        lgo.style.display="block";
        lgi.style.display="none";
    }
}

function logout()
{
    localStorage.clear();
    lgo.style.display="none";  
    lgi.style.display="block";  //makign login division visible
}
function validate()
{
    var wrong=true;           
    var ID=$('#email').val();
    var PWD=$('#password').val();
    
    $.getJSON('json_files/customer.json',function(output){
        $.each(output,function(key,data){
            if(key=="passenger")
                $.each(data,function(key,value){ //key specifies the which block of data we are accessing [1->{} , 2->{}]
                    var id=data[key].email;
                    var pwd=data[key].password;
                    
					//	match id & pwd
                    if(id==ID && pwd==PWD)  
                    {
                        alert("Welcome BACK");
                        wrong=false;			//data is matched
        
                        var flight_details={    //obj to store user detail
                            name:data[key].user_name,
                            email:id,
                            login:"true"
                        };
                        var details=JSON.stringify(flight_details);
                        localStorage.setItem('newPassenger', details);
                        
                        window.location.assign("myflight/MyFlight.html");//naviagte to my flight page
                    }
                });
        });
        if(wrong==true)
                    alert("Wrong id or password!!TRY AGAIN");
    });
                   
}
















// window.onload=function()
// {
//     localStorage.clear();
// }

// const { exit } = require("process");
// var fs=require('fs');
// var flight_details={
//     name:'ms',
//     email:'id'
// };

// var details=JSON.stringify(flight_details,null,2);

// // alert(details);
// fs.writeFile('json_files/newPassenger.json',details,function(err){
//     if (err) {
//         console.log('Error writing file');
//     } else {
//         console.log('Successfully wrote file');
//     }
// });