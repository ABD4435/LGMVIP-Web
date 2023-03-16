let addTask = document.getElementById("addTask");
let btnText= addTask.innerText;
let taskField = document.getElementById("taskField");
let allTasksDisplay = document.getElementById('allTasks');
let info = [];
let editId = null;

let localStr = localStorage.getItem('Tasks');
if(localStr != null) {
info = JSON.parse(localStr);
}

addTask.onclick = () => {
  let Task = taskField.value;
  if (editId != null) {
    info.splice(editId,1,{'Task': Task});
    editId = null;
  } else if(Task != '') {
  info.push({'Task': Task});
  }
  saveInfo(info);
  taskField.value = '';
  addTask.innerText = btnText;

}
function saveInfo(info) {
  let strTask = JSON.stringify(info);
  localStorage.setItem('Tasks', strTask);
  displayInfo();
}

function displayInfo () {
  let displayTask = '';
  info.forEach((task, i) => {
    displayTask += `<tr>
    <td>${i+1}</td>
    <td>${task.Task}</td>
    <td>
      <button class="btn"><i class="fa fa-edit fa-2x" onclick = 'editInfo(${i})'></i></button>
      <button class="btn"><i class="fa fa-check fa-2x" onclick = 'deleteInfo(${i})'></i></button>
    </td>
  </tr>`
  });
  allTasksDisplay.innerHTML = displayTask;
}

function editInfo (id) {
  editId = id;
  taskField.value  = info[id].Task;
  addTask.innerText = "Save"
}

function deleteInfo  (id) {
  info.splice(id,1);
  saveInfo(info);
}