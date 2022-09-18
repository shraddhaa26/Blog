function getvalue(){
        var retval=prompt("enter your blog topic","enter you topic here ");
        document.write("you have entered:"+retval);
    }

    var password=document.getElementById("logi2");

    password.addEventListener("invalid",passErr)
           function passErr(){
        alert("Must contain 6 or more characters")
           }

  function getpassword(){
         prompt("Enter your user name to get a new password");
  }    

