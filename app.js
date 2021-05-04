
let switchBtnEl = document.querySelector("#modeSwitch");

let lightMode = document.querySelectorAll(".light-theme")

const toggleTheme = () => {
  document.body.classList.toggle('dark-theme')
}
switchBtnEl.addEventListener('click', toggleTheme)