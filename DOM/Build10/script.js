let inp = document.querySelector("input");
let btn = document.querySelector("button");
let tasks = document.querySelector(".tasks")

btn.addEventListener("click", () => {

    let inptext = inp.value;
    if (inptext !== "" && inptext.trim() !== "") {

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");

        let taskLine = document.createElement("div");
        taskLine.classList.add("task-line");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        let text = document.createElement("h4");
        text.classList.add("text");
        text.textContent = inptext;

        let icon = document.createElement("i");
        icon.textContent = "❌";

        taskLine.appendChild(checkbox);
        taskLine.appendChild(text);

        taskDiv.appendChild(taskLine);
        taskDiv.appendChild(icon);

        tasks.appendChild(taskDiv);

        checkbox.addEventListener("change", ()=>{
            text.classList.toggle("toggle");
        });
        icon.addEventListener("click", ()=>{
            taskDiv.remove();
        });
    }
    else {
        window.alert("Please write your tasks.")
    }

    inp.value = "";
});