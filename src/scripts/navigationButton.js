const NavButtons = document.querySelectorAll(".nav-button");

for (const NavButton of NavButtons) {
    let html = NavButton.innerHTML;
    NavButton.addEventListener('mouseover', HoverButton);
}

function HoverButton(event) {
    for (const NavButton of NavButtons) {
        if (NavButton.innerHTML == event.currentTarget.innerHTML){
            //NavButton.classList.add("animation: slide-out");
        }
    }
}