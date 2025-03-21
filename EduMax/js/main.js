function togglelLoading() {
    let loader =  document.querySelector(".Loader");
    loader.style.display = loader.style.display == "none" ? "block" : "none";
} 

//Page Scrol
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
});
