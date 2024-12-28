const input = document.querySelector(".inpt");
const btn = document.querySelector(".add");
const dabba = document.querySelector(".taskAdded");
const nota = document.querySelector(".autoo");
const msg = document.querySelector(".writeMsg");
const limit = document.querySelector(".maxLimit");
const count = document.querySelector(".count");
let counter = 0;

const taskCount=document.createElement("p");
taskCount.textContent="Total number of task = 0";
count.appendChild(taskCount);


/// enter key pressed
input.addEventListener('keydown', (event) => {
  console.log("start");
  if (event.key === 'Enter'){
    addQueue();
  }
  console.log("end");
});

btn.addEventListener("click", addQueue);

function addQueue() {
  if (!input.value) {
    msg.innerText = "Write the task to add";
    msg.classList.add("active");
    setTimeout(() => {
      msg.classList.remove("active");
    }, 2000);

    return;
  }
  if (counter >= 10) {
    limit.innerText = "Maximum tasks reached!!";
    limit.classList.add("activate");
    setTimeout(() => {
      limit.classList.remove("activate");
    }, 2000);
    input.value="";
    return;
  }
  if (input.value && counter === 0) nota.parentElement.removeChild(nota);
  counter = counter + 1;
  const divParent=document.createElement("div");
  const num=document.createElement("div");
  num.textContent="◉";
  const cross=document.createElement("div");
  cross.textContent='X';
  cross.className="xcross x"+counter;
  const task = document.createElement("p");
  task.textContent = `${input.value}`;
  divParent.style.cssText="width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 10px;"
  num.style.cssText="width: 30px; height: 30px; border-radius: 50%; background-color: rgba(245, 222, 179, 1); display: flex; align-items: center; justify-content: center;"
  cross.style.cssText="width: 30px; height: 30px; border-radius: 50%; font-weight: 800; color: black; cursor: pointer; background-color: rgba(255, 99, 71, 1); display: flex; align-items: center; justify-content: center;"
  task.style.cssText ="background-color: white; width: 86%; word-wrap: break-word; text-align: justify; border: 1px solid rgba(0,0,0,0.25); padding: 0.35rem 0.5rem; border-radius: 0.2rem; font-size: 0.75rem; text-transform: uppercase;";
  if (input.value){
    divParent.appendChild(num);
    divParent.appendChild(task);
    divParent.appendChild(cross);
    dabba.appendChild(divParent);
    input.value="";
    taskCount.textContent=`Total number of task = ${counter}`;
  }
  const xelement=document.querySelectorAll(".xcross");
  xelement.forEach((box)=>{
    box.addEventListener("click",crossCut);
  });
}



function crossCut(event){
  const childEle=event.target;
  const parentEle=childEle.parentElement;
  parentEle.remove();
  counter--;
  taskCount.textContent=`Total number of task = ${counter}`;
  if(counter===0) dabba.appendChild(nota);
}

document.getElementById('download').addEventListener('click', function () {
  const container = document.getElementById('to-do-list');
  html2canvas(container).then(canvas => {
      // Create a link element
      const link = document.createElement('a');
      link.href = canvas.toDataURL(); // Convert canvas to data URL
      link.download = 'to-do-list.png'; // File name for download
      link.click(); // Trigger the download
  });
});
