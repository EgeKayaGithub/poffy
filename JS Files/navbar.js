document.addEventListener("DOMContentLoaded", async function() {
    // fetch('navbar.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         const navbar = document.createElement('div');
    //         navbar.innerHTML = data;
    //         document.body.insertBefore(navbar, document.body.firstChild);
    //         // const mainPage = document.getElementsByClassName("mainPage")[0]
    //        1 // console.log(mainPage)
    //     });
    let res = await fetch('navbar.html')
    res = await res.text()
    const navbar = document.createElement('div');
    navbar.innerHTML = res;
    document.body.insertBefore(navbar, document.body.firstChild);
});


function showDisplayOfTheHamburgerMenu(){
    let hamburgerMenuContainer = document.querySelectorAll(".hamburgerMenuContainer")
    let hamburgerMenuButtonContainer = document.querySelectorAll(".hamburgerMenuButtonContainer")
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

