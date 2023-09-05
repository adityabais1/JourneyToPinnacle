document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const navbarMenu = document.getElementById("navbarMenu");

    toggleBtn.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
    });
});
