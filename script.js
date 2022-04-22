function toggleMenu() {

    let menu = document.getElementById('mobileMenu')
    let item = menu.classList.item(0).toString()

    if (item === 'hide') {
        showMenu()
    }

    if (item === 'show') {
        hideMenu()
    }

    function showMenu() {
        menu.classList.add('show')
        menu.classList.remove('hide')
    }

    function hideMenu() {
        menu.classList.remove('show')
        menu.classList.add('hide')
    }
}