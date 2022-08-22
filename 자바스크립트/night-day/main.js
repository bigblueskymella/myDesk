// <!--<input type="button" value="night" onclick="
// document.querySelector('body').style.backgroundColor = 'black';
// document.querySelector('body').style.color = 'white';
// ">
// <input type="button" value="day" onclick="
// document.querySelector('body').style.backgroundColor = 'white';
// document.querySelector('body').style.color = 'black';
// ">-->
addEventListener

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (this.value === "night") {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    this.value = "day";

    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = "powderblue";
      i = i + 1;
    }
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    this.value = "night";

    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      console.log(alist[i]);
      alist[i].style.color = "blue";
      i = i + 1;
    }
  }
}
