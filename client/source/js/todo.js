const ul = document.querySelector('#listetodo');

function addtask(todo) {
    let newtask = document.createElement('li');
    newtask.innerHTML = todo;
    let suppr = document.createElement('button');
    suppr.classList.add('btn');
    suppr.innerHTML = "X";
    suppr.addEventListener("click", function(){this.parentNode.remove()});
    newtask.appendChild(suppr);
    ul.appendChild(newtask);
}

fetch('/api/todo')
.then(function(response) {
    return response.json();
})
    .then(function(myjson) {
myjson.forEach(function (todo) {
    console.log(todo);
addtask(todo.todo)
})
    });

let bouton = document.querySelector('#bouton');

bouton.onclick = function addtodo() {
    let input = document.querySelector('#newtask');
    let value = input.value;
    if (value) {
        addtask(value);
        input.value = "";
    }
};
