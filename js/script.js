window.onload = function () {
	

	submit = () => {
		let fname = document.getElementById("fname").value;
		let lname = document.getElementById("lname").value;
		let email = document.getElementById("email").value;
		let pwd = document.getElementById("pwd").value;

		if (!fname && !lname && !email && !pwd) {
			document.getElementById("fname").style.border =
				"2px solid hsl(0,100%,74%)";

			document.getElementById("lname").style.border =
				"2px solid hsl(0,100%,74%)";
			document.getElementById("email").style.border =
				"2px solid hsl(0,100%,74%)";
			document.getElementById("pwd").style.border = "2px solid hsl(0,100%,74%)";

			let icon = document.getElementsByClassName("err-icon");
			for (var i = 0; i < icon.length; i++) {
				icon[i].style.visibility = "visible";
				icon[i].style.float = "right";
				icon[i].style.marginRight = "21px";
				icon[i].style.marginTop = "-56px";
				icon[i].style.marginBottom = "0";
				icon[i].style.position = "relative";
				icon[i].style.zIndex = "2";
			}

			document.getElementById("err-fname").innerText =
				"First Name cannot be empty";

			document.getElementById("err-lname").innerText =
				"Last Name cannot be empty";
			document.getElementById("err-email").innerText = "Email cannot be empty";
			document.getElementById("err-pwd").innerText = "Password cannot be empty";
		}
		if (!fname || fname === "") {
			document.getElementById("fname").style.border =
				"2px solid hsl(0,100%,74%)";

			document.getElementById("err-fname").innerText =
				"First Name cannot be empty";
			document.getElementById("err-fname").style.visibility = "visible";
			document.getElementById("err-fname").style.color = "hsl(0,100%,74%)";

			document.getElementById("err-fname").style.fontSize = "10px";
			document.getElementById("err-fname").style.float = "right";
		}
		if (!lname || lname === "") {
			document.getElementById("lname").style.border =
				"2px solid hsl(0,100%,74%)";

			document.getElementById("err-lname").innerText =
				"Last Name cannot be empty";
			document.getElementById("err-lname").style.visibility = "visible";
			document.getElementById("err-lname").style.color = "hsl(0,100%,74%)";

			document.getElementById("err-lname").style.fontSize = "10px";
			document.getElementById("err-lname").style.float = "right";
		}
		if (validateEmail(email) || email === "") {
			document.getElementById("email").style.border =
				"2px solid hsl(0,100%,74%)";

			document.getElementById("err-email").innerText =
				"Looks like this is not an email";
			document.getElementById("err-email").style.visibility = "visible";
			document.getElementById("err-email").style.color = "hsl(0,100%,74%)";

			document.getElementById("err-email").style.fontSize = "10px";

			document.getElementById("err-email").style.float = "right";
		}
		if (!pwd || pwd === "") {
			document.getElementById("pwd").style.border = "2px solid hsl(0,100%,74%)";

			document.getElementById("err-pwd").innerText =
				"Password cannot be empty";
			document.getElementById("err-pwd").style.visibility = "visible";
			document.getElementById("err-pwd").style.color = "hsl(0,100%,74%)";

			document.getElementById("err-pwd").style.fontSize = "10px";
			document.getElementById("err-pwd").style.float = "right";
		}
	};
};
validateEmail = (email) => {
	let regex = /\S+@\S+\.\S+/;
	return regex.test(email);
};
