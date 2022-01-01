let save = document.querySelector('.save');
let cancel = document.querySelector('.cancel');
let newTopic = document.querySelector('.new_topic');

var tasks = [];

//EVENTOS

save.addEventListener('click', saveTopic);


//FUNÇÕES 

function saveTopic() {
    tasks.push(newTopic.value)
    newTopic.value = "";

    
    var parentElement = document.body;
    var topicSaved = document.createElement('h2');
    var topicSavedContent = document.createTextNode(tasks[tasks.length - 1]);
    
    topicSaved.appendChild(topicSavedContent);
    parentElement.appendChild(topicSaved);
   

} 
