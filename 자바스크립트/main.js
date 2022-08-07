//1. 박스2개 만들기
//2. 드랍다운 리스트 만들기
//2. 환율정보 들고오기
//3. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//4. 금액을 입력하면 환전이 된다
//5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//6. 숫자를 한국어로 읽는 법
//7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율 적용

let currencyRatio = {
  USD: {
    KRW: 1303.74,
    USD: 1,
    EUR: 0.98,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00077,
    EUR: 0.00075,
    unit: "원",
  },
  EUR: {
    KRW: "1,328.17",
    USD: 1.02,
    EUR: 1,
    unit: "유로",
  },
};
//1. console.log(currencyRatio.USD.unit);
//2. console.log(currencyRatio["VND"].unit);
//console.log(document.querySelectorAll("#from-currency-list a"));
let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1.버튼가져온다
    //2.버튼값바꾼다
    document.getElementById("from-button").textContent = this.textContent; //이것의 텍스트값 가져와서

    //3.선택된 currency값 변수에 저장해준다
    fromCurrency = this.textContent;
    console.log("fromcurrency는 ", fromCurrency);
    convert()
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    convert()
  })
);

//1. 키를 입력하는 순간
//2. 환전이 되어서
//3. 환전된 값이 보인다

function convert() {
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
  console.log("환전결과!",convertedAmount);

  document.getElementById("to-input").value = convertedAmount;
}

//1. 드랍다운 리스트에 값이 바뀔때마다
//2. 환전을 다시한다.