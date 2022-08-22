//유저가 값을 입력한다
//+버튼 클릭하면, 할 일이 추가된다
//delete버튼 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1. check 버튼 클릭 순간, true->false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안 끝난 걸로 간주하고 그대로

//진행 중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝난 아이템만, 진행중 탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let filterList = [];
let mode = addButton.addEventListener("click", addTask);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  //let taskContent = taskInput.value;
  let task = {
    //관련있는 정보 묶는 객체
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  //console.log(taskList);
  render();
}

function render() {
  let list = []
  if(mode == "all"){
    list = taskList
  }else if(mode =="ongoing"){
    //list = filterList
    for (taskList[i].isComplete == false){
      filterList.push(taskList[i]);
    }
  } 
  render();

  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task1">
                    <div class="task-done">${taskList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
                    </div>
                </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
                       <div>
                        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
                    </div>
                </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  //console.log("id:", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function deleteTask(id) {
  console.log("삭제하기", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render(); //값이 업데이트 되면 UI도 같이 업데이트!!
}

function filter(event) {
  mode = event.target.id;
  //console.log("필터클릭!",event.target); // 어떤거 클릭
   if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    taskList = filterList;
    render();
  }
  console.log(filterList);
}

function randomIDGenerate() {
  return ("000000000" + Math.random().toString(36).substr(2, 9)).slice(-9); //랜덤값
}
