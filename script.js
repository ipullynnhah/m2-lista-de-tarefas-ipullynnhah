function renderElements(arrTasks) {
  const tasksList = document.querySelector("ul.tasks__list");
  tasksList.innerHTML = "";
  for (const task of arrTasks) {
    tasksList.appendChild(createTaskItem(task));
  }
}

function createTaskItem(taskObj) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  li.classList.add("task__item");
  div.classList.add("task-info__container");
  span.classList.add("task-type");
  button.classList.add("task__button--remove-task");

  const type = taskObj.type.toLowerCase();
  if (type === "urgente") {
    span.classList.add("span-urgent");
  } else if (type === "importante") {
    span.classList.add("span-important");
  } else if (type === "normal") {
    span.classList.add("span-normal");
  }

  p.innerText = taskObj.title;

  li.appendChild(div);
  li.appendChild(button);
  div.appendChild(span);
  div.appendChild(p);

  return li;
}

const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" }
];

const newTaskBtn = document.querySelector("button.form__button--add-task");
const inputTitle = document.getElementById("input_title");
const selectPriority = document.querySelector("select");

newTaskBtn.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  const title = inputTitle.value;
  inputTitle.value = "";

  const type = selectPriority.value;
  selectPriority.value = "";
  
  tasks.push({ title, type });
  renderElements(tasks);
});

renderElements(tasks);
