function togglelLoading() {
    let loader =  document.querySelector(".Loader");
    loader.style.display = loader.style.display == "none" ? "block" : "none";
} 

//Page Scrol
window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");

    if (this.window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
});
