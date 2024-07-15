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

    for(let i = 0; i<=hamburgerMenuContainer.length; i++ ){
        if(hamburgerMenuContainer[i].style.width == "100vw"){
            hamburgerMenuContainer[i].style.width = "0vw"
            hamburgerMenuContainer[i].style.marginTop = "0"
        }
        else{
            hamburgerMenuContainer[i].style.width = "100vw"
            hamburgerMenuContainer[i].style.marginTop = "-10px"
        }
    }
}
