function showSideBar(){
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "flex";
}
function hideSideBar(){
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "none";
}


let popup = document.getElementById("contact-popup");

function openPopup(){
    popup.classList.add("open-contact-popup")
}
function closePopup(){
    popup.classList.remove("open-contact-popup")
}