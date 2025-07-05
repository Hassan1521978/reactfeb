// Validate Data function

function validateData(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class","alert alert-danger text-center resulto");

    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data In Form";
        return false;
    }else if(user.length<5 || user.length>15){
        result.innerHTML = "Enter in Name 5-15 chracter";
        return false;
    }else if(email.indexOf("@",3) ==-1 || email.indexOf("gmail.com") ==-1){
        result.innerHTML = "Enter valid Email";
        return false;
    }else if(pass==""){
        result.innerHTML = "Enter Password";
        return false;
    }else if(pass.length<8){
        result.innerHTML = "Week Password";
        return false;
    }else if(pass != confirm){
        result.innerHTML = "Mathed Password";
        return false;
    }
}