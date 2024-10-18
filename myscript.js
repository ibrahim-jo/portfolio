const menu = [
  "task Manager Menu :",
  "Add Task",
  "view Tasks",
  "toggle Task Completion",
  "Edit Task",
  "Delete Task",
  "find Task",
  "Exit",
];
let tasks = [];
const m = () => {
  for (let i = 0; i < menu.length; i++) {
    console.log(`${i}. ${menu[i]}`);
  }
};

const taskId = () => {
  const inp= prompt("inter the proses ID")
  if(inp>=1 && inp<=7) 
    return inp
  else{
    console.log('invalid choice,please enter a number between 1 - 6')
    start()
  }
}

const addTask = () => {
  const task = prompt("Enter new Task");
  const newTask = {
    id: Math.floor(Math.random()*20),
    task: task,
    status: false,
  };
  const data=JSON.parse(localStorage.getItem('todolist'))
  if(data?.length>0){
    // const listTask=JSON.parse(localStorage.getItem('todolist'))
    const newList=[...data,newTask]
    console.log('Task add:',newList)
    localStorage.setItem('todolist',JSON.stringify(newList))
  }
  else{
    tasks.push(newTask);
    localStorage.setItem('todolist',JSON.stringify(tasks))
  }
  
  start();
};
const viewTasks = () => {
  const data=JSON.parse(localStorage.getItem('todolist'))
  const listOfTask=[...data]
  if (listOfTask.length>0) {
    listOfTask.forEach((element) => {
      console.log(
        `${element.id}.${element.task} [${
          element.status ? "complete" : "incomplete"
        }]`
      );
    });
  } else {
    console.log("NoTasks");
  }
  
  start();
};
const toggleTask = () => {
  const toggleId = prompt("inter Id Task toggle");
  const data=[...JSON.parse(localStorage.getItem('todolist'))]
  if(data){
    data.map((element) => {
      console.log('id',element.id)
      if (element.id == toggleId) element.status = !element.status;
    });
    localStorage.setItem('todolist',JSON.stringify(data))
  }
  else{
    console.log('no Tasks...')
  }
  start();
};
const editTask = () => {
  const id = prompt("inter Id Task to Edit");
  const data=[...JSON.parse(localStorage.getItem('todolist'))]

  data.map((element) => {
    if (element.id == id) {
      const newtask = prompt(" Edit Task");
      element.task = newtask;
    }
  });
  localStorage.setItem('todolist',JSON.stringify(data))

  start();
};
const deleteTask = () => {
  const id = prompt("inter Id Task to Delete");
  const data=[...JSON.parse(localStorage.getItem('todolist'))]

  const editdata = data.filter((element) => {
    return element.id != id;
  });
  if(editdata.length == data.length){
    console.log('Task not Found')
  }
  else{
    localStorage.setItem('todolist',JSON.stringify(editdata))

  }
  start();
};
const findTask=()=>{
  const findTask = prompt("find Task");
  const data=[...JSON.parse(localStorage.getItem('todolist'))]
  if(data){

  const target=data.filter((element)=>{return element.task ==findTask})

  console.log("result of search",`${target[0].id}.${target[0].task} [${
          target[0].status ? "complete" : "incomplete"
        }]`)
  }
  else{
    console.log('no Tasks')
  }
   start()
}

const start = () => {
  m();
  switch (taskId()) {
    case "1":
      addTask();
    case "2":
      viewTasks();

    case "3":
      toggleTask();
    case "4":
      editTask();
    case "5":
      deleteTask();
      case '6':
        findTask()
      
   
    default:
      break;
  }
};
start();
