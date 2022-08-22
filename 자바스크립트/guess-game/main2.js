//컴이 랜덤번호 설정된다
//유저가 숫자를 입력한다 go라는 버튼을 누름
//컴의번호 > 유저입력값 UP!!!
//컴의번호 < 유저입력값 DOWN!!!
//맞추면 "맞췄습니다!!!"
//Reset버튼을 누르면 게임이 리셋된다
//5번까지 기회가 있다 5번이 넘으면 더 이상 입력할 수 없다. disable
//유저가 1~100범위 밖 숫자 입력하면 알려준다. 기회 깎지 않는다.
//이미 입력한 숫자 입력하면 알려준다, 기회 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");

playButton.addEventListener("click", play); //play함수를 변수처럼 넘겼다!!

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    console.log("UP!!!");
  } else {
  console.log("DOWN");
  }
}


pickRandomNum();
