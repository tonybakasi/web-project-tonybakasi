const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const signup = document.querySelector(".signup");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const pwd_format = document.querySelector("pwd-format");

menu.addEventListener('click', function() {
 menu.classList.toggle('is-active')
 menuLinks.classList.toggle('active');

 // Definining password format of 8-15 alphanumeric characters
const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

password.addEventListener('focusin',()=>{
	pwd_format.style.display = 'block';
})

//checks password entered by the user
//if password pattern matches the border of password input will turn green
password.addEventListener('keyup', ()=>{
	if(passwordPattern.test(password.value)){
		password.style.borderColor = 'green'
		pwd_format.style.color = 'green' 
	}else{
		password.style.borderColor = 'red'
		pwd_format.style.color = 'red' 
	}
	}
)

password.addEventListener('focusout', ()=>{
	pwd_format.style.display = 'none';
})

confirmPassword.addEventListener('focusin',()=>{
	pwd_format.style.display = 'block';
	confirmPassword.addEventListener('keyup', ()=>{
	if(passwordPattern.test(pconfirmPassword.value) && password.value === confirmPassword.value){
		confirmPassword.style.borderColor = 'green'
		pwd_format.style.color = 'green' 
	}else{
		confirmPassword.style.borderColor = 'red'
		pwd_format.style.color = 'red' 
	}
})
})

confirmPassword.addEventListener('focusout',()=>{
	pwd_format.style.display = 'none';
})

termCond.addEventListener('change', ()=>{
	if(termCond.checked === true){
		signup.disabled = false;
	}else if(termCond.checked === false){
		signup.disabled = true;
	}
})
})