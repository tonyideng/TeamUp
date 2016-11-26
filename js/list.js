//script for adding in an item in the list, and also for removing any item.

function addTask(){

  var task = document.getElementById('input').value; //this takes in the value of what you type
  document.getElementById('input').innerHTML = task; //this accesses the html typed in the field

  if (task != ""){ // this prevents someone from adding an empty task

    var newTask = document.createElement("li"); // creating a new <li> element
    newTask.setAttribute("id", "newitem"); // setting an ID for the new element, so it can be called on in the removeTask function
    var taskName = document.createTextNode(task); // creating a textnode from var task
    var taskList = document.getElementById('task-list'); //getting the id of the the <ul> element 'task-list'

    newTask.appendChild(taskName); //appending the created textnode to the <li>
    taskList.appendChild(newTask); //appending <li> to the <ul>

    var btn = document.createElement("BUTTON");
    var x = document.createTextNode("✖️");
    btn.setAttribute("id", "newbtn"); //new ID for new button element
    btn.appendChild(x);
    taskList.appendChild(btn);

    btn.addEventListener("click", removeTask); //adding click event for button

  }else{

    alert('Trying to be Sneaky? Please Enter a Task'); // this prevents someone from adding an empty task

  };
}


function removeTask() {
  document.getElementById('task-list').removeChild(document.getElementById("newitem"));
  document.getElementById('task-list').removeChild(document.getElementById("newbtn"));
}
