const hamburgerMenuButton = document.getElementById('menu-hamburger')
const closeMobileSidebarButton = document.getElementById('close-mobile-sidebar')
const toggleThemeButton = document.getElementById('toggle-theme')
enum Theme {
    LIGHT_MOED = 'theme-light',
    DARK_MOED = 'theme-dark',
}

enum Selectors {
    MOBILE_SIDE_BAR = '#mobile-sidebar',
    BACKDROP = '.backdrop',
    DARK_MODE_ICON = '#theme-dark__toggle-icon',
    LIGHT_MODE_ICON = '#theme-light__toggle-icon',
}
const THEME_MODE_LOCAL_KEY = 'theme-mode'

hamburgerMenuButton.addEventListener('click', () => {
    document.querySelector(Selectors.MOBILE_SIDE_BAR).classList.add('open')
    document.querySelector(Selectors.BACKDROP).classList.add('visible')
    document.body.classList.add('no-scroll')
})

closeMobileSidebarButton.addEventListener('click', () => {
    document.querySelector(Selectors.MOBILE_SIDE_BAR).classList.remove('open')
    document.body.classList.remove('no-scroll')
    document.querySelector(Selectors.BACKDROP).classList.remove('visible')
})

const toggleThemeMode = function () {
    const newMode =
        document.body.classList[0] === Theme.LIGHT_MOED
            ? Theme.DARK_MOED
            : Theme.LIGHT_MOED
    setBodyThemeMode(newMode)
    handelThemeIconModeChange()
}

const setBodyThemeMode = function (newMode: string) {
    const currentMode =
        newMode === Theme.LIGHT_MOED ? Theme.DARK_MOED : Theme.LIGHT_MOED
    document.body.classList.replace(currentMode, newMode)
    localStorage.setItem(THEME_MODE_LOCAL_KEY, newMode)
}
const handelThemeIconModeChange = function () {
    document.querySelector(Selectors.DARK_MODE_ICON).classList.toggle('hide')
    document.querySelector(Selectors.LIGHT_MODE_ICON).classList.toggle('hide')
}

toggleThemeButton.addEventListener('click', toggleThemeMode)

const init = function () {
    // set inital theme mode
    const initalMode =
        localStorage.getItem(THEME_MODE_LOCAL_KEY) ?? Theme.LIGHT_MOED
    localStorage.setItem(THEME_MODE_LOCAL_KEY, initalMode)
    const iconSelector =
        initalMode === Theme.LIGHT_MOED
            ? Selectors.DARK_MODE_ICON
            : Selectors.LIGHT_MODE_ICON

    console.log(iconSelector)
    document.querySelector(iconSelector).classList.toggle('hide')
    setBodyThemeMode(initalMode)
}

init()
