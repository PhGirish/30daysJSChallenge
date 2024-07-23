const task1 = document.getElementById("heading");
const task2 = document.querySelector(".task2");
const task4 = document.querySelector(".task4");
const task5 = document.querySelector(".task5");
const imageEl = document.querySelector(".image");
const btnEl = document.querySelector(".btn");
const colorEl = document.querySelector(".colorEl");

//task1
task1.innerHTML = "HEADING";

//task2
task2.style.backgroundColor = "blue";

//task3 (Append Child)
let newDiv = document.createElement("div");
newDiv.textContent = "helloDiv3";
document.body.appendChild(newDiv);

//task4 (append child)

let newli = document.createElement("li");
newli.innerHTML = "hello";
task4.appendChild(newli);

// task5[removing]
task5.remove();

// task6 [removing the last element ( last child & remove child )]
let lastElement = task4.lastChild;
task4.removeChild(lastElement);
// or
task4.removeChild(task4.lastElementChild);

//task7 (changing img src)
imageEl.src = "../images/img2.jpg";

//task8 (toggle css class)
btnEl.addEventListener("click", () => {
  colorEl.classList.toggle("changeColor");
  task1.textContent += " hello"; //task 9 ("adding text content to existing elemtnt")
});

//task10 [mouseover , mouseout]
colorEl.addEventListener("mouseover", () => {
  colorEl.style.border = "1px solid black";
});

colorEl.addEventListener("mouseout", () => {
  colorEl.style.border = "none";
});
