import { addTodo } from "./addTodo";
import { ModalUIController } from "../controllers/ModalUIController";
import { TodoUIController } from "../controllers/TodoUIController";
import { saveTodos } from "./localStorageHandler"; 

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
                const newTodo = addTodo(
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

export function setupDetailsTodoModalEventListener(todo, todos) {
    const deleteTodoBtn = document.getElementById("delete-button");
    const editTodoBtn = document.getElementById("edit-button");
    const modalUIController = new ModalUIController();
    const todoUIController = new TodoUIController();

    setupModalClose(modalUIController);

    if (deleteTodoBtn) {
        deleteTodoBtn.addEventListener("click", () => {
            const index = todos.indexOf(todo);
            if (index > -1) {
                todos.splice(index, 1); 
                saveTodos(todos); 
                todoUIController.displayAllTodos(todos); 
                modalUIController.hideModal(); 
            }
        });
    }

    if (editTodoBtn) {
        editTodoBtn.addEventListener("click", () => {
            modalUIController.displayEditTodoModal(todo, todos);
        });
    }
}

export function setupEditTodoModalEventListener(todo, todos) {
    const modalUIController = new ModalUIController();
    const todoUIController = new TodoUIController();

    document.getElementById("close-modal").addEventListener("click", () => {
        modalUIController.hideModal();
    });

    const form = document.getElementById("edit-todo-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const updatedTitle = document.getElementById("edit-todo-title").value;
        const updatedDescription = document.getElementById("edit-todo-description").value;
        const updatedDueDate = document.getElementById("edit-todo-due-date").value;
        const updatedImportance = document.getElementById("edit-todo-importance").value;

        todo.title = updatedTitle;
        todo.description = updatedDescription;
        todo.dueDate = updatedDueDate;
        todo.importance = getImportanceValue(updatedImportance); 

        saveTodos(todos); 
        todoUIController.displayAllTodos(todos);
        modalUIController.hideModal(); 
    });
}

function getImportanceValue(importanceLabel) {
    const importanceMap = {
        high: "1",
        medium: "2",
        low: "3"
    };
    return importanceMap[importanceLabel] || null; 
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

