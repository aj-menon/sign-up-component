window.onload = function () {
	submit = () => {
		let fname = document.getElementById("fname");
		let lname = document.getElementById("lname");
		let email = document.getElementById("email");
		let pwd = document.getElementById("pwd");
		validateInput(fname.getAttribute("id"));
		validateInput(lname.getAttribute("id"));
		validateInput(pwd.getAttribute("id"));
		validateEmail(email.getAttribute("id"));
	};
};
validateEmail = (id) => {
	console.log(id);
	let email = document.getElementById(id).value;
	let regex = /^[a-zA-z0-9._]+@[a-zA-z0-9._]+\.[a-zA-z0-9]{2,4}$/;

	if (!regex.test(email)) {
		document.getElementById("email").style.border = "2px solid hsl(0,100%,74%)";

		document.getElementById("err-email").innerText =
			"Looks like this is not an email";
		document.getElementById("err-email").style.visibility = "visible";
		document.getElementById("err-email").style.color = "hsl(0,100%,74%)";

		document.getElementById("err-email").style.fontSize = "10px";

		document.getElementById("err-email").style.float = "right";
	} else {
		document.getElementById(`icon-${id}`).style.visibility = "hidden";
		document.getElementById(id).style.borderColor = "hsl(154, 59%, 51%)";

		document.getElementById(`err-${id}`).style.visibility = "hidden";
	}
};
validateInput = (id) => {
	let input = document.getElementById(id).value;
	if (!input || input === "") {
		document.getElementById(id).style.border = "2px solid hsl(0,100%,74%)";
		switch (id) {
			case "fname":
				document.getElementById(`err-${id}`).innerText =
					"First Name cannot be empty";

				break;
			case "lname":
				document.getElementById(`err-${id}`).innerText =
					"Last Name cannot be empty";
				break;
			case "pwd":
				document.getElementById(`err-${id}`).innerText =
					"Password cannot be empty";
				break;
		}

		document.getElementById(`err-${id}`).style.visibility = "visible";
		document.getElementById(`err-${id}`).style.color = "hsl(0,100%,74%)";

		document.getElementById(`err-${id}`).style.fontSize = "10px";
		document.getElementById(`err-${id}`).style.float = "right";
	} else {
		document.getElementById(id).style.borderColor = "hsl(154, 59%, 51%)";

		document.getElementById(`err-${id}`).style.visibility = "hidden";

		switch (id) {
			case "fname":
				document.getElementById(`icon-${id}`).style.visibility = "hidden";
				break;
			case "lname":
				document.getElementById(`icon-${id}`).style.visibility = "hidden";
				break;

			case "password":
				document.getElementById(`icon-${id}`).style.visibility = "hidden";
				break;
		}
	}
};

handleInputChange = (e) => {
	let id = e.id;
	if (e.value) {
		document.getElementById(id).value = e.value;
		validateInput(id);
	}
};
handleEmailInput = () => {
	let id = e.id;

	validateEmail(id);
};
