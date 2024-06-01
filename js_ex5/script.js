function nut(){
    const text = document.querySelector('#text');
    const list = document.querySelector('#taskList')
    const task = text.value.trim();
            
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;

        const xoa = document.createElement('button');
        xoa.classList.add('bx', 'bx-x');
        xoa.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(xoa);
        taskList.appendChild(li);
        text.value = '';
    }

}