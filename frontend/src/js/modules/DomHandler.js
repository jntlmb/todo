import { createTodo } from "./templates";

export class DomHandler {
    constructor() {
        this.contentContainer = document.getElementById("content-container");
    }

    printAllTodos(todos) {
        todos.forEach((todo) => {
            const newTodo = createTodo(todo);
            this.contentContainer.appendChild(newTodo);
        });
    }

    printUpcomingTodos() {}

    printAnytimeTodos() {}

    printPriorityTodos() {}

    printAddTodoModal() {}

    printAddProjectModal() {}
}
