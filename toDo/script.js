const input = document.getElementById("title");
const description = document.getElementById("description");
const addBtn = document.querySelector("#myBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const container = document.querySelector(".container");
const form = document.querySelector("form");

const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")): [];
console.log(tasks);
showAllTasks();

function showAllTasks(){
    tasks.forEach((value, index)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "task");
    
            const innerDiv = document.createElement("div");
            div.append(innerDiv);
    
                const title = document.createElement("p");
                title.innerText = value.title;
                innerDiv.append(title);
    
                const desc = document.createElement("span");
                desc.innerText = value.description;
                innerDiv.append(desc);  
    
            const dBtn = document.createElement("button");
            dBtn.setAttribute("class", "deleteBtn");
            dBtn.innerText = "-";

            dBtn.addEventListener("click", ()=>{
                removeTasks();
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                showAllTasks();
            });

            div.append(dBtn);
    
        container.append(div);
    });
};

function removeTasks() {
    tasks.forEach((value, index)=>{
        const div = document.querySelector(".task");
        div.remove();
    });
};

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeTasks();
    
    tasks.push({
        title: input.value,
        description: description.value,
    });
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAllTasks();
});