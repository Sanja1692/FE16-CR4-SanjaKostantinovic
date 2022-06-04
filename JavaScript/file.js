const taskList = JSON.parse(tasks);
// console.log(tasks);
const taskCards = document.getElementById("allcards");

printData = () => {
    taskCards.innerHTML = "";
    taskList.forEach((task) => {
        taskCards.innerHTML += `<div class="card col-lg-3 col-md-5 col-sm-10 cardmod shadow-lg mt-0 mb-5 ms-2 me-2">
                <div class="justify-content-between d-flex pt-3 pb-3">
        <div class="leftside ps-2">
            <a href="#" class="btn btn-info pt-1 pb-1 text-white">Task</a>
        </div>
        <div class="rightside">
            <img src="pics/bookmark.png" alt="" width="20" height="16">
            <img src="pics/dot.png" alt="" width="20" height="16">
        </div>
    </div>
                <img src="${task.image}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-center">${task.taskName}</h5>
                  <p class="card-text text-center">${task.description}</p>
                </div>
                <div class="d-flex border-top pt-3">
        <p class="m-0 ms-2 align-self-center"><p class="m-0 align-self-center"><img src="pics/important.png" class="importantbutton" alt="" width="20" height="20"> Priority level: </p>
            <p class="p-1 rounded m-0 importance" id="test3">${task.importance}</p>
            <div>                            
            <button class="imp-btn"><span class="imp-count">0</span></button>
            </div>

        </p>
    </div>
    <div class="border-bottom pt-2 ms-2">
        <p><img src="pics/calender.png" alt="" width="20" height="20"> Deadline: ${task.dueTime}</p>
    </div>
    <div class="text-end pt-3 pe-2">
            <p class="btn btn-danger"><img src="pics/trash.png" alt="" width="20" height="20">Delete</p>
            <p class="btn btn-success"><img src="pics/check.png" alt="" width="20" height="20">Done</p>
        </div>
          </div>
`
    });
};
const increaseImportance = () => {
    const impBtn = document.querySelectorAll(".imp-btn");
    impBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            const importan = taskList[i].importance++;
            btn.querySelector(".imp-count").innerHTML =
                importan;
            console.log(taskList[i]);
        });
    });
};


const validateBtn = (e) => {
        console.log(e.target.change);
        if (e.target.change < 1) {
            e.target.style.backgroundcolor = "green";
        } else if (e.target.change < 3) {
            e.target.style.backgroundcolor = "yellow";
        } else {
            e.target.style.backgroundcolor = "red";

        }
    }
    // document.getElementById("sortUp").addEventListener("click", function() {
    //     taskList.sort((a, b) => b.importance - a.importance);
    //     document.getElementById("allcards").innerHTML = "";
    // })
    // document.getElementById("sortDown").addEventListener("click", function() {
    //     taskList.sort((a, b) => a.importance - b.importance);
    //     document.getElementById("allcards").innerHTML = "";
    // })

function sortTasks() {
    data.sort(function(firstNumber, secondNumber) {
        return secondNumber.importance - firstNumber.importance;
    })
}

document.getElementById("sortUp").addEventListener("click", function() {
    sortTasks();
});

printData();
increaseImportance();
impBtn.addEventListener("change", validateBtn);