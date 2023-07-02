// Récupérer les tâches depuis le localStorage lors du chargement de la page
window.onload = function() {
    var savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      var tasks = JSON.parse(savedTasks);
      for (var i = 0; i < tasks.length; i++) {
        addTaskToList(tasks[i]);
      }
    }
  };
  
  // Ajouter une tâche à la liste
  function addTask() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value;
    if (task !== '') {
      addTaskToList(task);
      saveTasksToLocalStorage();
      taskInput.value = '';
    }
  }
  
  // Ajouter une tâche à la liste et mettre à jour le localStorage
  function addTaskToList(task) {
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  }
  
  // Sauvegarder les tâches dans le localStorage
  function saveTasksToLocalStorage() {
    var taskList = document.getElementById('taskList');
    var tasks = [];
    for (var i = 0; i < taskList.children.length; i++) {
      var task = taskList.children[i].textContent;
      tasks.push(task);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  