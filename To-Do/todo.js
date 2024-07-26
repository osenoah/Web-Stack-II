var inputBox = document.getElementById('input-box');
var tasks = document.getElementById('tasks');

function addTask() {
    if (inputBox.value === '') {
        alert("Add a Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
 inputBox.value = ""
 saveData();
}

tasks.addEventListener("click", function(e) {
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", tasks.innerHtml)
}

function showTask(){
    tasks.innerHTML = localStorage.getItem("data");
}
showTask();