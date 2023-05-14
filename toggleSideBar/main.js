let toggleStatus = false;

let toggleSideBar = function() {
    let getSidebar = document.querySelector(".side-bar");
    let getSidebarUl = document.querySelector(".side-bar ul");
    let getSidebarA = document.querySelectorAll(".side-bar a");


    if (!toggleStatus){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "200px"

        let arrLength = getSidebarA.length;

        for (let i = 0; i < arrLength; i++) {
            getSidebarA[i].style.opacity = "1";
            
        }

        toggleStatus = true;
    }

    else if (toggleStatus){
        getSidebar.style.width = "50px"

        let arrLength = getSidebarA.length;

        for (let i = 0; i < arrLength; i++) {
            getSidebarA[i].style.opacity = "0";
            
        }
        
        getSidebarUl.style.visibility = "hidden"
        toggleStatus = false;
    }
}