// get the moon/sun icon
const icon = document.querySelector('#icon')

// restore the light/dark mode from local storage
const localData = localStorage.getItem("theme");
if(localData === "light" ) {
    icon.src = 'images/moon.png'
    document.body.classList.remove("dark-theme");
} else {
    icon.src = 'images/sun.png'
    document.body.classList.add("dark-theme");
}

// listen for click events
icon.addEventListener('click', () => {

    // toggle dark mode class, and change the icon
    if(document.body.classList.toggle('dark-theme')) {
        icon.src = 'images/sun.png'
        localStorage.setItem("theme", "dark")
    } else {
        icon.src = 'images/moon.png'
        localStorage.setItem("theme", "light")
    }

});


