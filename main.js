// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link"); 

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// open menu
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// close menu
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// change photo credits
const credits = document.getElementById("photoCreds");
if(window.screen.width > 568 || 
    window.innerWidth > 568){
    credits.setAttribute('href', 'https://unsplash.com/@nathananderson');
    credits.innerText = "Photograph by Nathan Anderson";
} else {
    credits.setAttribute('href', 'https://unsplash.com/@olenkasergienko');
    credits.innerText = "Photograph by Olena Bohovyk";
}



// on click, copy email to clipboard
const clipBtn = document.getElementById("clipboard");
clipBtn.addEventListener("click",copyToClipboard);

function copyToClipboard() {
    navigator.clipboard.writeText("delmonted@proton.me").then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });

    // confirm
    clipBtn.innerText = "copied!";
}


// set credit in footer
const currentYear = new Date().getFullYear();
let credit = document.getElementById("credits");
credit.innerHTML = `&copy; ${currentYear} Del Monte`;