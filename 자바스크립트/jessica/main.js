function call(name) {
  console.log(`안녕 내 이름은 ${name}야`);
}

call("제시카");
call("에밀리");
call("할리");

function meetAt(date) {
  let num = prompt("년도/월/일");
  if (num.length==4){
    document.write(`${num}년`);
  } else if (num.length>4 && num.length<7){
    document.write(`${num(0,3)}년 ${num(4)}일`);
  }
}
meetAt();
