document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addElem(e.target.new_task_description.value)
    form.reset()
   
  }) 


 // document.querySelector('#priority').addEventListener('click', sortPriorities);

});
function addElem(task) {
  const priority = document.getElementById('priority')
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleted)
  btn.textContent = '❌';
  li.textContent = `${task}  `;
  li.appendChild(btn);

 /* if(priority === 'high') {
    li.classList.add('high-priority');
  } else if(priority === 'medium') {
    li.classList.add('medium-priority');
  } else if(priority === 'low') {
    li.classList.add('low-priority');
  } 
 */
 
  document.querySelector('#tasks').appendChild(li);
}
 
function deleted(e) {
  e.target.parentNode.remove()
}

/*function sortPriorities() {
  const tasks = document.querySelectorAll('#tasks li');
  const sortedTasks = Array.from(tasks).sort((task1 , task2) => {
    const p1 = getPriority(task1);
    const p2 = getPriority(task2);
    return p1.localeCompare(p2);  

  });

  const toDoList = document.querySelectorAll('#tasks');
  toDoList.innerHTML = '';

  for(const task of sortedTasks) {
    toDoList.appendChild(task);
  }
}


function getPriority(taskE) {
  if(taskE.classList.contains('high-priority')) {
    return 'high'
  } else if(taskE.classList.contains('medium-priority')) {
    return 'medium'
  } else  {
    return 'low'
  } 
}
*/

