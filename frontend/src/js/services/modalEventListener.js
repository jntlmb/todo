import { addTodo } from "./addTodo";
import { ModalUIController } from "../controllers/ModalUIController";
import { TodoUIController } from "../controllers/TodoUIController";

export function setupAddTodoModalEventListener(todos) {
    const addBtn = document.getElementById("add-button");
    const modalUIController = new ModalUIController();
    const todoUIController = new TodoUIController();

    setupModalClose(modalUIController);

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

                todoTitle.value = "";
                todoDescription.value = "";
                todoDueDate.value = "";
                todoImportance.value = "";

                todoUIController.displayAllTodos(todos);

                modalUIController.hideModal();
            }
        });
    }
}

export function setupDetailsTodoModalEventListener() {
    const deleteTodoBtn = document.getElementById("delete-button");
    const editTodoBtn = document.getElementById("edit-button");
    const modalUIController = new ModalUIController();

    setupModalClose(modalUIController);

    if (deleteTodoBtn) {
        deleteTodoBtn.addEventListener("click", () => {
            console.log("delete todo...");
        });
    }

    if (editTodoBtn) {
        editTodoBtn.addEventListener("click", () => {
            console.log("add todo...");
        });
    }
}

function setupModalClose(modalUIController) {
    const modalContainer = document.getElementById("modal-container");
    const modalCloseBtn = document.getElementById("close-modal");

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            modalContainer.innerHTML = "";
            modalUIController.hideModal();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                modalUIController.hideModal();
            }
        });
    }
}
