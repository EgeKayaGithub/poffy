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
    mainPage.classList.remove("white-color")
    mainPage.classList.add("red-color")
    document.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            navbar.classList.remove('not-scrolled');
            navbar.classList.add('scrolled');
            navbarContainer.classList.add('not-padding');
            navbarContainer.classList.remove('padding');
            mainPage.classList.remove("red-color")
            mainPage.classList.add("black-color")
            for(let i = 0; i<=a.length-1;i++){
                a[i].classList.remove('white-color')
                a[i].classList.add('normal-color')
                mainPage.classList.remove("normal-color")
                mainPage.classList.add("black-color")
            }
        } else {
            navbar.classList.add('not-scrolled');
            navbar.classList.remove('scrolled');
            navbarContainer.classList.remove('not-padding');
            navbarContainer.classList.add('padding');
            mainPage.classList.remove("black-color")
            mainPage.classList.add("red-color")
            for(let i = 0; i<=a.length-1;i++){
                a[i].classList.remove('normal-color')
                a[i].classList.add('white-color')
                mainPage.classList.remove("black-color")
                mainPage.classList.add("normal-color")
            }
    }})
}
