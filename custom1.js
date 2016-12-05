function setCookie(cname,cvalue) {
    
    document.cookie = cname + "=" + cvalue ;
}

function getCookie(cname) {
    if(document.cookie != null){
       var user = document.cookie.split("=");
       return user[1];
    }
   else {
      return "";
    }
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
		$(function){
			$("#welcome").text("Welcome "+ user);
		}
    } else {
       user = prompt("Please enter your name:");
       if (user != "" && user != null) {
           setCookie("username", user);
       }
    }
}