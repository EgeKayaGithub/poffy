document.addEventListener("DOMContentLoaded", function() {
    let interval = setInterval(()=>{
        let navbar = document.getElementById("navbar")
        if(navbar){
            changeColor()
            clearInterval(interval)
        }
    },50)
})

function changeColor(){
    const mainPage = document.getElementsByClassName("mainPage")[0]
    const navbarContainer = document.getElementsByClassName("navbar-container")[0]
    const navbar = document.getElementsByClassName("navbar")[0]
    const a = document.getElementsByClassName("a")
    const hamburgerBar = document.getElementsByClassName("bar")
    mainPage.classList.remove("white-color")
    mainPage.classList.add("red-color")
    navbar.classList.remove("scrolled")
    navbar.classList.add("not-scrolled")
    for(let i = 0; i<=a.length-1;i++){
        a[i].classList.remove('normal-color')
        a[i].classList.add('white-color')
    }
    document.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            navbar.classList.remove('not-scrolled');
            navbar.classList.add('scrolled');
            mainPage.classList.remove("red-color")
            mainPage.classList.add("black-color")
            for(let i = 0; i<=hamburgerBar.length-1;i++){
                hamburgerBar[i].classList.remove('white-background-color')
                hamburgerBar[i].classList.add('black-background-color')
            }
            for(let i = 0; i<=a.length-1;i++){
                a[i].classList.remove('white-color')
                a[i].classList.add('normal-color')
                mainPage.classList.remove("normal-color")
                mainPage.classList.add("black-color")
            }
        } else {
            navbar.classList.add('not-scrolled');
            navbar.classList.remove('scrolled');
            mainPage.classList.remove("normal-color")
            mainPage.classList.remove("white-color")
            mainPage.classList.add("red-color")
            for(let i = 0; i<=hamburgerBar.length-1;i++){
                hamburgerBar[i].classList.add('white-background-color')
                hamburgerBar[i].classList.remove('black-background-color')
            }
            for(let i = 0; i<=a.length-1;i++){
                a[i].classList.remove('normal-color')
                a[i].classList.add('white-color')
            }
    }})
}
