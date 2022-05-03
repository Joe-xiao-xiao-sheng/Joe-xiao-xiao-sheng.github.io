
var logout = document.getElementById("loginOut");
function loginOut(){
	if(confirm("您真的要退出吗？")){
		sessionStorage.removeItem("user");
		sessionStorage.removeItem("role");
		window.location.href = "Login.html";
	}
		
}

function changePassword(){
	document.getElementById("repasswordBox").style.display = "block";
	document.getElementById("submit").disabled = "";
}

function updata(role){
	var password = document.getElementById("password").value;console.log(document.getElementById("repasssword") == null);
	
	var repassword = document.getElementById("repasssword").value;
	
	
	
	if(password != repassword ) alert("两次输入密码不一致请重试");
	fetch("http://localhost:8081/" + role +  "/updata",{
		method: 'POST',
		body: JSON.stringify(main.user),
		headers:{
			'Content-Type': 'application/json'
		}
	}).then(resp => {
		if(resp.ok) return resp.json()
		else throw new Error("请求错误,请检查网络信息")
	}).then(data => {
		if(data.success == false){
			alert("创建失败请重试");
		}
		else if(data.success == true){
			alert("创建成功");
			window.location.href = "Login.html";
		}
	});
}