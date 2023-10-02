const navigation = () => {
    const hamburgerMenu = document.querySelector("header button");
    const nav = document.querySelector("nav");
    const close = document.querySelector("button.close");

    hamburgerMenu.addEventListener("click", (event) => {
        // nav.className = "show-nav";
        nav.classList.add("show-nav");
        // close.style.display = "inline-flex";
        // event.target.style.display = "none";
    });
    close.addEventListener("click", () => {
        nav.classList.remove("show-nav");
    });
};

navigation();
