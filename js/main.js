const d = document
// Variables
const $panelBtn = d.querySelector('.panel-btn')
const $panel = d.querySelector('.navigation-links')
const $menuLinks = d.querySelector('.navigation-links a')

const loaderBar = document.querySelector('.loader-bar')
const loader = document.querySelector('.loader')
// Custom Functions

// Events Listeners
d.addEventListener('click', (e) => {
  if(e.target.matches('.panel-btn') || e.target.matches(`.panel-btn *`)){
    $panel.classList.toggle('active')
    $panelBtn.classList.toggle('is-active')
  }
  
  if(e.target.matches('.navigation-links a')) {
    $panel.classList.remove('active')
    $panelBtn.classList.remove('is-active')
  }
})


loaderBar.addEventListener('animationend', () => {
  loader.classList.add('show')
})