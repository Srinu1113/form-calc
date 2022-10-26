document.getElementById('submit').onclick=function(a){
    a.preventDefault();
 
                 var table = document.getElementById("table");
                 var row = table.insertRow(-1);
                 var name = row.insertCell(0);
                 var email = row.insertCell(1);
                 var mobile = row.insertCell(2);
                //  var location  = row.insertCell(3);
                //  var gender  = row.insertCell(4);
                //  var country  = row.insertCell(5);
                //  var state  = row.insertCell(6);
                //  var District  = row.insertCell(7);
                 name.innerHTML = document.getElementById("fullname").value;
                 email.innerHTML = document.getElementById("email").value;
                 mobile.innerHTML = document.getElementById("mbno").value;
                 local.innerHTML = document.getElementById("ind").value;
                 gender.innerHTML = document.getElementById("male").value;
                //  country.innerHTML = document.getElementById("country").value;
                //  state.innerHTML = document.getElementById("state").value;
                //  District.innerHTML = document.getElementById("District").value;
             
                 return false;
 }
 
 //Name validation
 
     
     document.getElementById('fullname').addEventListener('keydown', function(evt) {
         var textCode= evt.textCode?evt.textCode:evt.which;
         if(textCode> 31 &&
          !(textCode<48||textCode>57))
           evt.preventDefault();
      })
     
   
//phone validation

     document.getElementById('mbno').addEventListener('keydown', function(e) {
         var key   = e.keyCode ? e.keyCode : e.which;
     
         if (key>31&&
            ( key<48||key>57))
          e.preventDefault();
     });
 
 //email
 function emailvalid(){
     
     var email1 = document.getElementById('email').value;
     var mailrex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if(email1.match(mailrex)){
         document.querySelector('#email').style.border='2px solid green';
         document.querySelector('#semail').style.visibility='hidden';
         document.querySelector('#eg').style.visibility='hidden';
         return true;
     }else{
         document.querySelector('#email').style.border='2px solid red';
         document.querySelector('#semail').style.visibility='visible';
         document.querySelector('#semail').innerHTML='Provide correct email';
         document.querySelector('#semail').style.color='red';
         document.querySelector('#eg').style.visibility='visible';
         document.querySelector('#eg').innerHTML='Eg : xxx@gmail.com';
         document.querySelector('#eg').style.color ='red';
         return false;
     }
 
 }
 
  
 /*$("#name").keypress(function (e) {
    if( e.which > 48 && e.which < 57 ){ return false; }
});

$("#mobile").keypress(function (e) {
    var mobileno = document.getElementById("mobile").value;
    console.log(mobileno);
   
   // if(mobileno.length >= 10){return false;}

    if(e.which == 31){return true}
    else{
        if( e.which < 48 || e.which > 57 ){ return false; }
    }
});*/

 //date//
 /*let dateToday=document.getElementById('olddate');
 let today=new Date();
 let day=`${today.getDate() <10 ? "0":""} ${today.getDate()}`;
 
 let month=`${(today.getMonth()+1) <10? "0":""}${today.getMonth()+1}`;
 let year= today.getFullYear();
 dateToday.textContent=`${day}/${month}/${year}`;*/
  
//Date  
const current = new Date();
function oldDay(){

    document.getElementById("oldDate").innerHTML= current.getDate()+"/"+"0"+(current.getMonth()+1)+ "/" +current.getFullYear();
   
 } 
//Time

 function shwe(){ 
    document.getElementById("oldHours").innerHTML= current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
 }



 
