const mtTymeout= setTimeout(myWhishes,1000);
 
function myWhishes(){
    document.getElementById("demo").innerHTML="Happy Birthday!"
}

function myStopFunction(){
    clearTimeout(myTimeout);
}