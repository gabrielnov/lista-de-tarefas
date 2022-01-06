let save = document.querySelector(".save");
save.addEventListener("click", saveTopic);

let topicInput = document.querySelector(".new_topic");

function showTopics() {

  let elements = document.getElementsByClassName("tasks");
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
    
  for (var i = 0; i < tasks.length; i++) {
    
    var divTasks = document.createElement("div");
    divTasks.className = "tasks";

    var pTask = document.createElement("p");

    var taskText = document.createTextNode(tasks[i]);
    pTask.appendChild(taskText);

    var trashIcon = document.createElement("i");
    trashIcon.setAttribute("onClick",`deleteTopic(${i})`);
    
    trashIcon.setAttribute("class", "fas fa-trash");

    divTasks.appendChild(trashIcon);
    divTasks.appendChild(pTask);

    document.body.appendChild(divTasks);
  }
}

var tasks = [];

function saveTopic() {
  let text = topicInput.value;

  tasks.push(text);
 topicInput.value = "";
  showTopics();
}
  
function deleteTopic(index) {
  tasks.splice(index, 1);
  showTopics();
}

window.onload = function () {
  showTopics();
};
