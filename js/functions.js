function toggleFunctions() {
	const [input, html, isDarkLocalStorage] = [document.querySelector("#check"), document.querySelector("html"), localStorage.isDark == "true"];
	const changeTheme = (isChecked) => {
		isChecked ? html.classList.add("dark") : html.classList.remove("dark");
	};
	const checkTheme = () => {
		if(isDarkLocalStorage){
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
}

export const toggleAllready = setInterval(() => {
    let toggleIS = document.querySelector(".switcher") != null ? true : false;
    if (toggleIS) {
		console.log("Toggle initialized!");
        clearInterval(toggleAllready);
		toggleFunctions();
    }else {
		clearInterval(toggleAllready);
		const finished = setInterval(() => {
			if(toggleIS) {
				console.log("Toggle initialized!");
				clearInterval(finished);
				toggleFunctions();
			}else {
				console.log("Insert the toggle!");
				clearInterval(finished);
			}
		}, 5000);
    }
}, 500);