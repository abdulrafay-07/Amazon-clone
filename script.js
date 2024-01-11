function removeFirstOption() {
    let firstOption = document.querySelector("#mySelect option:first-child");
    firstOption.style.display = "none";
    document.getElementById("mySelect").removeEventListener("click", removeFirstOption);
}

function changePage() {
    if (window.innerWidth <= 499 && !window.location.href.includes("mob.html")) {
        window.location.href = "mob.html";
    } else if (window.innerWidth > 499 && !window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
}

// Call the function when the page loads and on window resize
window.onload = changePage;
window.onresize = changePage;