let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");

let verticalUnderline = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a")


horizontalMenus.forEach((menu) =>
  menu.addEventListener("mousemove", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

verticalMenus.forEach((menu) =>
    menu.addEventListener("mousemove", (e) => verticalIndicator(e))
);

function verticalIndicator(e) {
    verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    verticalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}