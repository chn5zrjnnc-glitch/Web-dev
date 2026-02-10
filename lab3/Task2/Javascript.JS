const input = document.getElementById('maininput');
const add_btn = document.getElementById('mainbutton');
const list = document.getElementById('mainul');


function AddTask() {
    const inputValue = input.value.trim(); 
    
    
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add("checking");
    
    const span = document.createElement('span');
    span.textContent = inputValue;
    span.classList.add("listtext")

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add("deletion");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
   
    list.appendChild(li);
    
    input.value = '';
    
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}

add_btn.addEventListener('click', AddTask);