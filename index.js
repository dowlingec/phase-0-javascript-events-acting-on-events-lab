// Your code here
const dodger= document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = "0px";
dodger.style.left = "0px";

document.addEventListener("keyDown", function (event) {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.leftReplace("px", "")
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left - 1}px`;
    }
})
//notes
//