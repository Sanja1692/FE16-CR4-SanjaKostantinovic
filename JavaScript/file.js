// console.log("works");

let taskList = JSON.parse(tasks);
let taskCards = document.getElementById(".allcards");

function printInfo = () => {
    taskCards.innerHTML = "";
    taskList.forEach((tasks) => {
        taskCards.innerHTML += `<div class="container book-list">
        //     <div id="img " style="width: 18rem">${tasks.image}</div>
        //     <div id="result" class="row">
        //         <p class="card-title" id="taskName">${tasks.taskName}</p>
        //         <p id="description">${tasks.description}</p>
        //         <p id="description">${tasks.dueTime}</p>
        //     </div>
        // </div>`
    });
};
printInfo();