document.querySelector("form.create-task").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.querySelector(".create-task-title");
    const description = form.querySelector(".create-task-description");

    const title_text = document.createElement("h4");
    title_text.classList.add("task-title");
    title_text.innerHTML = title.value;
    const description_text = document.createElement("h5");
    description_text.classList.add("description-title");
    description_text.innerHTML = description.value;

    const li = document.createElement('li');
    li.classList.add("task");
    li.appendChild(title_text);
    li.appendChild(description_text);

    const ul = document.querySelector("#todo-col").querySelector(".tasks");
    ul.appendChild(li);
});


// TODO: get selected task and move it on btn press

// move span directly on click since it's less tiem consuming
document.querySelector("span.task-container").addEventListener("click", (event) => {
    event.target.parentNode; 

});