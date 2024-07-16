document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbar = document.createElement('div');
            navbar.innerHTML = data;
            document.body.insertBefore(navbar, document.body.firstChild);
        });
});


function showDisplayOfTheHamburgerMenu(){
    let hamburgerMenuContainer = document.querySelectorAll(".hamburgerMenuContainer")
    let hamburgerMenuButtonContainer = document.querySelectorAll(".hamburgerMenuButtonContainer")
    // let hamburgerMenuButtonContainer = document.querySelectorAll(".hamburgerMenuButtonContainer")
    for(let i = 0; i<=hamburgerMenuContainer.length-1; i++ ){
        if(hamburgerMenuContainer[i].style.width == "100vw" || hamburgerMenuContainer[i].style.width == null){
            hamburgerMenuContainer[i].style.width = "0vw"
            hamburgerMenuButtonContainer[i].style.marginTop = "0"
            hamburgerMenuButtonContainer[i].style.marginRight = "0"
        }
        else{
            hamburgerMenuContainer[i].style.width = "100vw"
            hamburgerMenuButtonContainer[i].style.marginTop = "-40px"
            hamburgerMenuButtonContainer[i].style.marginRight = "-60px"
        }
    }
}
const x = document.getElementsByClassName("navbar")
document.addEventListener('scroll', () => {
    for(let i = 0; i<=x.length-1; i++ ){
        if(window.scrollY > 100) {
            x[i].classList.remove('not-scrolled');
            x[i].classList.add('scrolled');
        } else {
            x[i].classList.add('not-scrolled');
            x[i].classList.remove('scrolled');
        }
    }

});
const y = document.getElementsByClassName("navbar-container")
document.addEventListener('scroll', () => {
    for(let i = 0; i<=y.length; i++ ){
        if(window.scrollY > 125) {
            y[i].classList.add('not-padding');
            y[i].classList.remove('padding');
        } else {
            y[i].classList.remove('not-padding');
            y[i].classList.add('padding');
        }
    }

});