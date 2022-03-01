username = document.getElementById("user_name");
function start_button()
{
     var name_of_user = document.getElementById("user_name").value;
     localStorage.setItem("name_of_user", name_of_user);

     if(username = "true"){
        window.location = "main.html";
     }
     else{
         document.getElementById("h5").innerHTML = "You Can't Start The Game Without A UserName";
     }
}