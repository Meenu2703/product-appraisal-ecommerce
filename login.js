
document.getElementById("email").addEventListener("input",validateEmail);
document.getElementById("pass").addEventListener("input",validatePass);

function validate(){
    const isValidEmail=validateEmail();
    const isValidPass=validatePass();
    return isValidEmail && isValidPass;
}

function validateEmail(){
    var mail=document.getElementById("email").value.trim();
    var pat_email=/^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
    if(mail==""){
            document.getElementsByClassName("error")[0].innerHTML="Email is required!";
            return false;
        
        }
        else if (!pat_email.test(mail)){
            document.getElementsByClassName("error")[0].innerHTML="Invalid Email!";
            return false;
        }
        document.getElementsByClassName("error")[0].innerHTML="";
            return true;  
}

function validatePass(){
    var pass=document.getElementById("pass").value.trim();
    var pat_pass=/^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-+]).{8,})$/;
    if(pass==""){
        document.getElementsByClassName("error")[1].innerHTML="Password is required!";
        return false;
    }
    else if (!pat_pass.test(pass)){
        document.getElementsByClassName("error")[1].innerHTML="Invalid Password!";
        return false;
    }
    document.getElementsByClassName("error")[1].innerHTML="";
        return true;
}

// retval=true;
// function validate(){
// var mail=document.getElementById("email").value;
// var pass=document.getElementById("pass").value;

// var pat_email=/^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
// var pat_pass=/^()$/;

// if(mail==""){
//     document.getElementsByClassName("error")[0].innerHTML="Email is required!";
//     retval=false;
// }
// else if (!pat_email.test(mail)){
//     document.getElementsByClassName("error")[0].innerHTML="Invalid Email!";
//     retval=false;
// }
// else{
//     retval=true;
// }

//     return retval;
// }



