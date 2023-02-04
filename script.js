import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

( () => {
const btn = document.querySelector("[data-form-btn]");
/*constante que va a seleccionar el data atributte data-form-btn */
const createTask =(evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");/*li tiene la clase card*/
    /*añadimos la clase card dinamicamente*/
    task.classList.add("card");
    input.value = "";
    /* Backticks con alt + 96 */
    const taskContent = document.createElement("div"); /* Cuadrito con la palomita */
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
  /*Insertar codugi html*/
  //task.innerHTML = content;
  /*al elemento lista quiero agregarle un hijo*/
  
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);

};
/*Arrow function  o Funciones anonimas*/
btn.addEventListener("click",createTask);

})()