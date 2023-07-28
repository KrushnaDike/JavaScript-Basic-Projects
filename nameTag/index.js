const input = document.getElementById("name");
const myBtn = document.getElementById("myBtn");
const tags = document.querySelector(".tags");
const myBtn2 = document.querySelector("#myBtn2");

const addingName = ()=> {
    const name = input.value;

    const div = document.createElement("div");
    div.setAttribute("class", "tag");
    div.innerText = "Hey, I am " + name + "!";

    tags.append(div);
};

const deletingName = ()=> {
    const tag = document.querySelector(".tag");
    tag.remove();
};

myBtn.onclick = addingName;
myBtn2.onclick = deletingName;