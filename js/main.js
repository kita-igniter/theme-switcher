const input = document.querySelector("#check");
const html = document.querySelector("html");
const changeTheme = (isChecked) => {
	isChecked ? html.classList.add("dark") : html.classList.remove("dark");
};
const checkTheme = () => {
	if(localStorage.isDark == "true"){
		input.checked = true;
		changeTheme(localStorage.isDark);
	}
};
input.addEventListener("change", (event) => {
	let isChecked = event.target.checked;
	localStorage.isDark = isChecked;
	changeTheme(isChecked);	
});

checkTheme();