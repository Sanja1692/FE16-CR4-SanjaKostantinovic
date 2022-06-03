const taskList = JSON.parse(tasks);
// console.log(tasks);
const taskCards = document.getElementById("allcards");

printData = () => {
    taskCards.innerHTML = "";
    taskList.forEach((task) => {
        taskCards.innerHTML += `    <div class="container mt-3" id="allcards">
                <div class="card col-lg-3 col-md-5 col-sm-10 cardmod shadow-lg mt-0 mb-5" style="width: 18rem;">
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
        </p>
    </div>
    <div class="border-bottom pt-2 ms-2">
        <p><img src="pics/calender.png" alt="" width="20" height="20"> Deadline: ${task.dueTime}</p>
    </div>
    <div class="text-end pt-3 pe-2">
            <p class="btn btn-danger"><img src="pics/trash.png" alt="" width="20" height="20">Delete</p>
            <p class="btn btn-success"><img src="pics/check.png" alt="" width="20" height="20">Done</p>
        </div>
          </div></div>

        </div>`
    });
};
printData();
// <div class="card col-lg-3 col-md-5 col-sm-10 cardmod shadow-lg mt-0 mb-5" id="importance1">
//     <div class="justify-content-between d-flex pt-3 pb-3">
//         <div class="leftside">
//             <a href="#" class="btn btn-info pt-1 pb-1 text-white">Task</a>
//         </div>
//         <div class="rightside">
//             <img src="pics/bookmark.png" alt="" width="20" height="16">
//             <img src="pics/dot.png" alt="" width="20" height="16">
//         </div>
//     </div>
//     <img src="$task.image}" class="card-img-top" alt="">
//     <div class="card-body">
//         <h5 class="card-title text-center">${task.taskName}</h5>
//         <p class="card-text text-center">${task.description}</p>
//     </div>
//     <div class="d-flex border-top pt-3">
//         <p class="m-0 align-self-center"><p class="m-0 align-self-center"><img src="pics/important.png" class="importantbutton" alt="" width="20" height="20"> Priority level: </p>
//             <p class="p-1 rounded m-0 importance" id="test3">${task.importance}</p>
//         </p>
//     </div>
//     <div class="border-bottom pt-2">
//         <p><img src="pics/calender.png" alt="" width="20" height="20"> Deadline: ${task.date}</p>
//     </div>
//     <div class="text-end pt-3">
//         <p class="btn btn-danger"><img src="pics/trash.png" alt="" width="20" height="20">Delete</p>
//         <p class="btn btn-success"><img src="pics/check.png" alt="" width="20" height="20">Done</p>
//     </div>
// </div>