const NavButtons = document.querySelectorAll(".navButtons");

for (const NavButton of NavButtons) {
    alert(NavButton.innerHTML);
    let html = NavButton.innerHTML;
    NavButton.addEventListener('mouseover', ()=>{
        HoverButton(html);
    });
}

function HoverButton(html) {
    alert(html);
}