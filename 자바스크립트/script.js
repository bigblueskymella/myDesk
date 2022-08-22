function findSmallestElement(arr){
    let result = arr[0];
    if (arr.length === 0){
      return 0;
    }
    for (let i = 1; i<arr.length; i++){
      if(result > arr[i]){
        result = arr[i];
      }
    }
    return result;
  }
  
  let smallestNumber = findSmallestElement([100,200,3])
  console.log(smallestNumber) //가장 작은 수 찍기

/*
  function meetAt(year,month,date){
    if(year){
        return `${year}년`
    }else if(year && month){
        return `${year}년 ${month}월`
    }else if(year && month && date){
        return `${year}/${month}/${date}`
    }
  }
  console.log(meetAt(2003)) //순서 이렇게 하면 첫번째 if 이후 실행되지 않음

/*
function meetAt(year, month, date) {
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;
  
    if (todayDate) {
      return `${todayYear}/${todayMonth}/${todayDate}`; //물결버튼
    }
    if (todayMonth) {
      return `${todayYear}년 ${todayMonth}월`;
    }
    if (todayYear) {
      return `${todayYear}년`;
    }
  }
  
    console.log(meetAt(2022, 1, 7))
/*
function greetTest(name){
    console.log("안녕 내 이름은",name, "야")
  }
  
  let name = greetTest("할리");

function makeBurger(type,size,num) {
    console.log("매개변수 값은?", type,size,num);
    console.log("빵두기");
    console.log("상추두기");
  
    if (type == "불고기") {
      console.log("고기패티두기");
    } else if (type == "새우") {
      console.log("새우패티두기");
    }
    console.log("뚜껑덮기");
    console.log(type,"버거",size,"사이즈",num,"개 준비완료")
  
    return "완료되었습니다."
  }
  
  
  function serveCoke() {
    console.log("콜라통선택");
    console.log("얼음담기");
    console.log("콜라담기");
  }
  
  function servefrenchFries() {
    console.log("감튀박스선택");
    console.log("감튀담기");
  }
  
  let result = makeBurger("불고기","L",3)
  console.log("버거 프로세스 결과", result)

  function makeSet(){ //펑션의 펑션
    makeBurger("새우","M",2)
    servefrenchFries()
    serveCoke()
  }

/*
function makeBurger(type) {
  console.log("매개변수 값은?", type);
  console.log("빵두기");
  console.log("상추두기");

  if (type == "불고기") {
    console.log("고기패티두기");
  } else if (type == "새우") {
    console.log("새우패티두기");
  }
  console.log("뚜껑덮기");
}

function serveCoke() {
  console.log("감튀박스선택");
  console.log("얼음담기");
  console.log("콜라담기");
}

function servefrenchFries() {
  console.log("감튀박스선택");
  console.log("감튀담기");
}

makeBurger("새우"); //불고기

/*
function makeBurger() {
  console.log("빵두기");
  console.log("상추두기");
  console.log("고기패티두기");
  console.log("뚜껑덮기");
}

function serveCoke() {
  console.log("감튀박스선택");
  console.log("얼음담기");
  console.log("콜라담기");
}

function servefrenchFries() {
  console.log("감튀박스선택");
  console.log("감튀담기");
}

servefrenchFries(); //괄호가 실행이다

/*
let n =11
let isPrime = true

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}
for(let i=2;i<n;i++){
  if(n % i == 0){
    isPrime =  false 
  }
}
console.log(isPrime)

/*
for(let i=1;i<=50;i++){
    let stringValue = i.toString() //문자로 바꿔주는 함수 toString
    let result = ""
    for(let j=0;j<stringValue.length;j++){
      if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
        result+="짝"  // result=result+"짝"
      }
    }
    console.log(result.length>0?result:i)
  }



/*
let fruit = ["banana", "apple", "grape", "mango"]

for (let i=0; i<fruit.length; i++){
    console.log(fruit[i])
}



/*
let i=2
while(i<10){
    console.log("while문 실행",i)
    i++;
}

while(buttonclick == true){ //이런식으로 많이씀 while
    console.log("while문 실행",i)
}



/*
for(let i =2; i<=9; i++){ 
    for(let j=1; j<=9; j++){
        console.log(i + "*" +j+ "=" +i*j)
    }
} //구구단 출력 / 크고 작은 톱니 다 움직여야 큰 톱니 바퀴 움직이는 같은 거
//for문은 배열이랑 찰떡궁합!

/*for(let i=0; i<10; i+1){
    console.log("나야",i)
}


/*
i=i+1  i++
i=i+2  i+=

let menu = 8;


let answer = menu <=3 ? "범위안의 숫자" : "범위밖의 숫자" 
//삼항연산식? 조건은 true일때 : false일때 / 리턴해야하는게 하나있을때

console.log(answer)

/*
if(menu <=3){
    console.log("범위안의 숫자")
}else{
    console.log("범위밖의 숫자")
}


/*
switch (menu) {
  case 1:
    console.log("물건사기");
    break;
  case 2:
    console.log("잔고확인");
    break;
  case 3:
    console.log("히스토리확인");
    break;
  default:
    console.log("홈으로 돌아가기");
}


if(menu == 1){
    console.log("물건 사기")
}else if(menu == 2){
    console.log("잔고확인")
}else if(menu == 3){
    console.log("히스토리확인")
}else{
    console.log("홈으로 돌아가기")
}





let skills = ["HTML","CSS","Javascript","React"]

if(skills > 2){
    console.log("합격")
}else if(skills > 1){
    console.log("예비")
}else{
    console("탈락")
}




let input = 0

if(input == 0){
    console.log("음성입니다.")
}else{
    console.log("양성입니다.")
}


let age = 18

if(age > 20){
  console.log("운전이 가능합니다.")
}else if(age >= 18 ){
  console.log("오토바이 운전 가능")
} else {
  console.log("운전 불가능")
}*/
