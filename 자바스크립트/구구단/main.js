// while문을 사용한 팩토리얼 계산
var n = prompt("숫자를 입력하세요.");
var msg = "";

if(n !== null){
    var nFact = 1;
    var i = 1;

    while(i <= n){
        nFact *= i;
        i++;
    }
    msg = n+"1 = " + nFact;
}
else
msg ="값을 입력하지 않았습니다.";

document.write(msg);

//----------------------------------구구단

// var i, j;

// for (i = 1; i <= 9; i++) {
//   document.write("<div>"); //
//   document.write("<h3>" + i + "단</h3>");
//   for (j = 1; j <= 9; j++) {
//     document.write(i + "X" + j + " = " + i * j + "<br>");
//   }
//   document.write("</div>"); //
// }
