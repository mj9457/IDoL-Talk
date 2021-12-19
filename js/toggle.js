function userProfileShow() {
    
    const profileSub = document.getElementById("user-profile__sub");
    const arrow = document.getElementById("user-multi-profile-bar-btn");

    if (profileSub.style.display == "none") {
        arrow.innerHTML = "<i class='fas fa-chevron-up'></i>";
        profileSub.style.display = "flex";        
    } else {
        arrow.innerHTML = "<i class='fas fa-chevron-down'></i>";
        profileSub.style.display = "none";        
        
    }
}

function birtydayShow() {
    const birtydayProfile = document.getElementById("birtyday-user-profile__sub");
    const birtydayBtn = document.getElementById("birtyday-user-profile-bar-btn");

    if (birtydayProfile.style.display == "none") {
        birtydayBtn.innerHTML = "<i class='fas fa-chevron-up'></i>";
        birtydayProfile.style.display = "flex";        
    } else {
        birtydayBtn.innerHTML = "<i class='fas fa-chevron-down'></i>";
        birtydayProfile.style.display = "none";        
        
    }
}

function friendShow() {
    const birtydayProfile = document.getElementById("birtyday-user-profile__sub");
    const birtydayBtn = document.getElementById("birtyday-user-profile-bar-btn");

    if (birtydayProfile.style.display == "none") {
        birtydayBtn.innerHTML = "<i class='fas fa-chevron-up'></i>";
        birtydayProfile.style.display = "flex";
    } else {
        birtydayBtn.innerHTML = "<i class='fas fa-chevron-down'></i>";
        birtydayProfile.style.display = "none";        
    }
}