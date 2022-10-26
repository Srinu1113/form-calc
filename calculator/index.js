
    function display(val){
    document.getElementById("screen").value+=val;
}
function cal(){
    var x =document.getElementById("screen").value;
    var y =eval(x)
    document.getElementById("screen").value=y;
}
function Clear(){
//    var button=document.getElementById("clear").value="";
   document.getElementById("screen").value=""
   
}
function Delete(){
    // var button=document.getElementById("delete").value;
   var button=document.getElementById("screen").value=""


    
    
 }
