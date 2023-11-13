const userTask = [];

function addTask() {
    const iTask = document.getElementById("ukoly").value;

    if (!userTask.includes(iTask)) {
        userTask.push(iTask);

        const tasksText = userTask.map((task, index) => {
            return `<div>${task} <button onclick="deleteTask(${index})">X</button> <button onclick="editTask(${index})">Edit</button></div>`;
        }).join('<br>');

        document.getElementById("vypis").innerHTML = tasksText;
    } else {
        alert("Task existuje!");
    }
}

function deleteTask(index) {
    userTask.splice(index, 1);
    updateTaskList();
}

function editTask(index) {
    const updatedTask = prompt("Upravit task:", userTask[index]);

    if (updatedTask !== null) {
        userTask[index] = updatedTask;
        updateTaskList();
    }
}

function updateTaskList() {
    const tasksText = userTask.map((task, index) => {
        return `<div>${task} <button onclick="deleteTask(${index})">X</button> <button onclick="editTask(${index})">Edit</button></div>`;
    }).join('<br>');

    document.getElementById("vypis").innerHTML = tasksText;
}
