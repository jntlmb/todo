import { addTodo } from "./addTodo";
import { ModalUIController } from "../controllers/ModalUIController";
import { TodoUIController } from "../controllers/TodoUIController";

export function setupAddTodoModalEventListener(todos) {
    const modalContainer = document.getElementById("modal-container");
    const modalCloseBtn = document.getElementById("close-modal");
    const addBtn = document.getElementById("add-button");
    const modalUIController = new ModalUIController(); // Create an instance
    const todoUIController = new TodoUIController(); // Create an instance

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            modalContainer.innerHTML = "";
            modalContainer.classList.add("hidden");
        });
    }

    const form = document.querySelector("#todo-form");
    const todoTitle = document.querySelector("#todo-title");
    const todoDescription = document.querySelector("#todo-description");
    const todoDueDate = document.querySelector("#todo-due-date");
    const todoImportance = document.querySelector("#todo-importance");

    if (addBtn) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (todoTitle.value && todoDescription.value) {
                addTodo(
                    todos,
                    todoTitle.value,
                    todoDescription.value,
                    todoDueDate.value,
                    todoImportance.value
                );

                // Clear the form fields
                todoTitle.value = "";
                todoDescription.value = "";
                todoDueDate.value = "";
                todoImportance.value = "";

                // Refresh the displayed todos
                todoUIController.displayAllTodos(todos);

                // Close the modal
                modalUIController.hideTodoModal(); // Close the modal after adding the todo
            }
        });
    }
}

export function setupDetailsTodoModalEventListener() {
    const modalContainer = document.getElementById("modal-container");
    const modalCloseBtn = document.getElementById("close-modal");

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            modalContainer.innerHTML = "";
            modalContainer.classList.add("hidden");
        });
    }
}
