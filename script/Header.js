var user = JSON.parse(sessionStorage.getItem("user"));
var username = document.getElementById("username");
if(user != null && user.name != null){
	username.innerText = user.name;
}
else{
	username.innerText = "登录";
}
function getUserDetail(){
	if(user != null){
		var role = sessionStorage.getItem("role");
		if(role == "患者"){
			window.location.href = "userInformation.html";
			return ;
			
		}
		else if(role == "医生"){
			window.location.href = "doctorInformation.html";
			return ;
		}
	}
	window.location.href = "Login.html";
}