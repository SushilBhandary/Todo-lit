 

let todo = []

const addButton = document.querySelector('.addButton')
const container = document.querySelector('.container')



addButton.addEventListener('click', () => {
    const input = document.querySelector('.input')
    todo.push(input.value)
    let str = ''
    for (let i = 0; i < todo.length; i++) {
        str += 
        `<div class='item' style="width: 500px;display: flex;">
            <span class='item_input'>${todo[i]}</span>
            <div>
                <span class='editButton' onclick="EditTodo(${i})">EDIT</span>
                <span class='deleteButton' onclick="deleteTodo(${i})">DELETE</span>
            </div>
        </div>`
    }
    container.innerHTML = str
    input.value = ''
})

const deleteTodo = (num) => {
    todo = todo.filter( (val, index) => index!==num)
    let str = ''
    for (let i = 0; i < todo.length; i++) {
        str += 
        `<div class='item' style="width: 500px;display: flex;">
            <span class='item_input'>${todo[i]}</span>
            <div>
                <span class='editButton'>EDIT</span>
                <span class='deleteButton' onclick="deleteTodo(${i})">DELETE</span>
            </div>
        </div>`
    }
    container.innerHTML = str
}

const EditTodo = (num) => {
    let str = ''
    console.log('hi');
    for (let i = 0; i < todo.length; i++) {
        if (num === i) {
            str += 
            `<div class='item' style="width: 500px;display: flex;">
                <input class='item_input' id='val' value=${todo[i]} style="color: #38CC77">
                <div>
                    <span class='editButton' onclick="SaveTodo(${i})">Save</span>
                    <span class='deleteButton' onclick="deleteTodo(${i})">DELETE</span>
                </div>
            </div>`
            continue;
        }
        str += 
        `<div class='item' style="width: 500px;display: flex;">
            <span class='item_input'>${todo[i]}</span>
            <div>
                <span class='editButton' onclick="EditTodo(${i})">EDIT</span>
                <span class='deleteButton' onclick="deleteTodo(${i})">DELETE</span>
            </div>
        </div>`
    }
    container.innerHTML = str
}

const SaveTodo = (index) => {
    todo[index] = document.querySelector('#val').value
    let str = ''
    for (let i = 0; i < todo.length; i++) {
        str += 
        `<div class='item' style="width: 500px;display: flex;">
            <span class='item_input'>${todo[i]}</span>
            <div>
                <span class='editButton'>EDIT</span>
                <span class='deleteButton' onclick="deleteTodo(${i})">DELETE</span>
            </div>
        </div>`
    }
    container.innerHTML = str
}