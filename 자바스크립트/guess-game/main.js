//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼 누름
//유저가 랜덤 번호 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼 누르면 게임 리셋
//5번의 기회 다 쓰면 게임 끝 (버튼 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click", play); //클릭이벤트 실행됐을때 play실행()안넣음함수도 변수처럼 넘길수있다.
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){ //익명의 함수. 일회성. 단순.
    userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1; //floor소수점이하 버림
  console.log("컴퓨터 선택 수", computerNum);
}

function play() {
  let userValue = userInput.value;

  if(userValue<1 || userValue>100){
    resultArea.textContent="1과100사이 숫자입력해주세요"
    return;
  }

  if(history.includes(userValue)) {
    resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자입력"
    return;
  }

  chances --;
  chanceArea.textContent = `남은 기회 ${chances}번 남았습니다.`
  console.log("chances", chances)

  if (userValue < computerNum) {
    resultArea.textContent = "UP!!!"
    console.log("UP!!!");
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!!"
    console.log("DOWN!!!");
  } else {
    resultArea.textContent = "맞았습니다."
    console.log("맞았습니다!!!");
    gameOver=true; //playButton.disabled=true;
  }

  history.push(userValue)


  if(chances < 1){
    gameOver=true
  }if(gameOver){  //if(gameover == true)과 같다.?
    playButton.disabled=true;
  }

} 

function reset(){
    //user input창 깨끗
    userInput.value = ""
    //새로운 번호 생성
    pickRandomNum();

    resultArea.textContent="결과값이 여기에 나온다"
}
pickRandomNum();
