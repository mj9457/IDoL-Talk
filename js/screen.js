function resizeApply() {
    const maxWidth = 645;
    const screenFooter = document.getElementsByClassName("screen-footer");
    const bigScreen = document.getElementById("bigScreen");
    if (window.innerWidth > maxWidth) {
        bigScreen.style.display = "flex"
        screenFooter.style.display = "none"
    } else {
        bigScreen.style.display = "none"
    }
}


window.onload = function() {
    window.addEventListener('resize', function() {
        resizeApply();
    });
}
resizeApply();

