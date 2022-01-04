let save = document.querySelector('.save');
let cancel = document.querySelector('.cancel');
let newTopic = document.querySelector('.new_topic');
var tasks = [];
//EVENTOS

save.addEventListener('click', saveTopic);


//FUNÇÕES 

function showTopics() {

    
        var parentElement = document.body;
        var topicSaved = document.createElement('h2');
        var topicSavedContent = document.createTextNode(tasks[tasks.length - 1]);
        var trashIcon = document.createElement('i');

        
        var index = tasks.indexOf(newTopic.value);
        trashIcon.addEventListener('click', function(){
            tasks.splice(index, 1);
            console.log(tasks);
            console.log('chamando a função...o index é:', index);
        });

        trashIcon.setAttribute('class', 'fas fa-trash');
        document.body.appendChild(trashIcon);
        
    
        topicSaved.appendChild(topicSavedContent);
        parentElement.appendChild(topicSaved);

}




function saveTopic() {
    tasks.push(newTopic.value)
    
    
    showTopics();
    newTopic.value = "";

} 
