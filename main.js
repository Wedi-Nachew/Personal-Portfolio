const navigation = () => {
    const hamburgerMenu = document.querySelector("header button");
    const nav = document.querySelector("nav");

    hamburgerMenu.addEventListener("click", (event) => {
        nav.classList.add("show-nav");
    });
    nav.addEventListener("click", () => {
        nav.classList.remove("show-nav");
    });
};

navigation();
