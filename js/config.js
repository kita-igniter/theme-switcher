function toggle() {
    return {
        body:`<div class="switcher">
                <input id="check" type="checkbox"/>
                <div for="click" class="switcher__slider">
                    <img src="./img/moon.svg" aria-label="moon icon" />
                    <img src="./img/sun.svg" aria-label="sun icon" />
                </div>
              </div>`
    };
}

export function insertToggle() {
    const div = document.createElement("div");
    div.innerHTML = toggle().body;
    document.body.appendChild(div);
}