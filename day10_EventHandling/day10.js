const paraEl = document.querySelector(".para");
const image1 = document.querySelector(".image1");
const head = document.querySelector(".head");
const inputEl = document.querySelector(".input");
const form1 = document.getElementById("form1");
const para2 = document.querySelector(".para2");
const select = document.querySelector("select");
const list = document.querySelector(".list");

//task1(changeText)
function changeText() {
  if (paraEl.textContent === "bububa dododada") {
    paraEl.textContent = "gogogaga dododada";
  } else {
    paraEl.textContent = "bububa dododada";
  }
}

//task2 ( double-click event listener )
image1.addEventListener("dblclick", () => {
  image1.style.opacity = 0.5;
});

//task3( mouseover )
head.addEventListener("mouseover", () => {
  head.style.border = "1px solid red";
});

//task4( mouse out )
head.addEventListener("mouseout", () => {
  head.style.border = "none";
});

//task5(keydown & event.key)
inputEl.addEventListener("keydown", (event) => {
  console.log(event.key);
});

//task6(keyup)
inputEl.addEventListener("keyup", () => {
  console.log(inputEl.value);
});

//task7 ( Submit Event  & formData)
form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form1);

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

//task8 ( change event listener )
select.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  para2.innerHTML = selectedValue;
});

//task9 ()

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

const newli = document.createElement("li");
newli.textContent = "item 4";
list.append(newli);
