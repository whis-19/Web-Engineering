function addTask() {
    let taskInput = document.getElementById("taskInput").value.trim();
    let taskTable = document.getElementById("taskTable");

    let deleteIcon = "../resources/delete.png";


    if (taskInput === "" || isDuplicate(taskInput)) return;

    let row = taskTable.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.textContent = taskInput;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<img width="30" height="30" src="${deleteIcon}">`;
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        deleteTask(taskInput);
    };
    cell2.appendChild(deleteButton);


    document.getElementById("taskInput").value = ""; 
}

function isDuplicate(taskInput) {
    let taskTable = document.getElementById("taskTable");

    for (let row of taskTable.rows) {
        if (row.rowIndex === 0) continue; 

        let existingTask = row.cells[0].textContent.trim();  
        if (existingTask === taskInput.trim()) {
            return true; 
        }
    }
    return false; 
}

function deleteTask(taskInput) {
    let taskTable = document.getElementById("taskTable");

    for (let row of taskTable.rows) {
        if (row.cells[0] && row.cells[0].textContent.trim() === taskInput) {
            row.remove(); 
            break;
        }
    }
}
