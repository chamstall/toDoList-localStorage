let form = document.querySelector("form");
let msg = document.querySelector("#msg");


// ecoute de l'évenement de soumission du formulaire
form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    console.log("button clicked");
    addTask();
});

// recuperer des taches existantes dans le localstorage lors du chargement de la page et leur ajouter a la liste
window.onload = function(){
    let savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
        let tasks = JSON.parse(savedTasks);
        for(let i = 0 ; i < tasks.length ; i++){
            addTaskToList(tasks[i]);
        };
    };
};

// Ajout de tache
function addTask (){
    let input = document.querySelector("input");
    let task = input.value;
    if (task === ""){
        msg.innerHTML = "You have to write something !" ;
    }
    else{
        console.log("success");
        msg.innerHTML = ""; 
        addTaskToList(task);
        saveTasksToLocalStorage();
        input.value = "";
    }
}

// fonction pour ajouter une tache a liste
function addTaskToList(task){
    let tasksList = document.querySelector("#tasksList");
    let div = document.createElement ("div");
    div.innerHTML = ` 
        <div class = " row bg-light mb-3 mx-1 rounded-2">
            <div class="col-10 rounded-2">
                <p> ${task} </p>
            </div>
            <div class="col-2 text-end d-flex align-items-center justify-content-center bg-warning p-2 rounded-end-2">
                <span>
                    <i class="fa-solid fa-pen-to-square me-3" onclick="Edit(this)"></i>
                    <i class="fa-solid fa-trash me-3" onclick="Delete(this)"></i>
                    <i class="fa-solid fa-check me-3" onclick="Finish(this)"></i>
                </span>
            </div>
        </div>
    `
    tasksList.appendChild(div);
}



// Fonction pour stocker les donnés avec le localstorage
function saveTasksToLocalStorage (){
    let tasksList = document.querySelector("#tasksList");
    let tasks = [];
    for(let i = 0 ; i < tasksList.children.length ; i++){
        let tache = tasksList.children[i].textContent;
        tasks.push(tache);
    }
    localStorage.setItem("tasks" , JSON.stringify(tasks));
    console.log(tasks)
}

// fonction Edit 
function Edit (e){
    input.value = e.parentElement.parentElement.previousElementSibling.innerText;
    e.parentElement.parentElement.parentElement.remove();
}

// fonction Delete 
function Delete(e){
    e.parentElement.parentElement.parentElement.remove();
}

// fonction terminer 
function Finish (e){
    e.parentElement.parentElement.previousElementSibling.style.backgroundColor = "rgba(000,200,000,0.4)";
}