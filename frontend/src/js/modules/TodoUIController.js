import { createTodoElement } from "./templates/todoTemplate";

export class TodoUIController {
    constructor() {
        this.contentContainer = document.getElementById("content-container");
    }

    displayAllTodos(todos) {
        this.clearContentContainer();

        todos.forEach((todo) => {
            const newTodo = createTodoElement(todo);
            this.contentContainer.appendChild(newTodo);
        });
    }

    displayTodayTodos() {
        this.clearContentContainer();
    }

    displayUpcomingTodos() {
        this.clearContentContainer();
    }

    displayAnytimeTodos() {
        this.clearContentContainer();
    }

    displayImportanceTodos() {
        this.clearContentContainer();
    }

    clearContentContainer() {
        this.contentContainer.innerHTML = "";
    }
}
