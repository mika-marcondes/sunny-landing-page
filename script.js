function toggleMenu() {

    let menu = document.getElementById("ham-container")
    let width = window.innerWidth.toString()

    if (menu.style.display === 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }

}

