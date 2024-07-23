const paraEl = document.querySelector(".para");
const changeButton = document.querySelector(".changeButton");
const hover = document.querySelector(".hover");
const input1 = document.querySelector(".input1");
const select = document.querySelector("select");
const input2 = document.querySelector(".input2");
const form = document.querySelector("form");
const list = document.querySelector(".list");

//task1
changeButton.addEventListener("click", () => {
  if (paraEl.textContent === "text changes here") {
    paraEl.textContent = "text is changed";
  } else {
    paraEl.textContent = "text changes here";
  }
});

//task2
hover.addEventListener("mouseover", () => {
  hover.style.border = "2px solid red";
});

hover.addEventListener("mouseout", () => {
  hover.style.border = "none";
});

//task3
input1.addEventListener("keyup", (e) => {
  console.log(e.key);
});
input1.addEventListener("keydown", (e) => {
  console.log(e.key);
});

//task4
select.addEventListener("change", (e) => {
  input2.innerHTML = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formdata = new FormData(form);
  formdata.forEach((value, key) => {
    console.log(key + ":" + value);
  });
});

//task5
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("clicked");
  }
});

const newli = document.createElement("li");
newli.innerHTML = "new item added dynimically";
list.appendChild(newli);
