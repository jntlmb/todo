import { createTodoElement } from "./templates/todoTemplate";

export class TodoUIController {
    constructor() {
        this.contentContainer = document.getElementById("content-container");

        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();

        this.today = `${this.year}-${this.month}-${this.day}`;
        this.weekFromToday = `${this.year}-${this.month}-${this.day + 7}`;
    }

    displayAllTodos(todos) {
        this.clearContentContainer();

        todos.forEach((todo) => {
            const newTodo = createTodoElement(todo);
            this.contentContainer.appendChild(newTodo);
        });
    }

    displayTodayTodos(todos) {
        this.clearContentContainer();
        let todosWithDate = [];

        todos.forEach((todo) => {
            if (todo.dueDate) {
                todosWithDate.push(todo);
            }
        });

        todosWithDate.forEach((todo) => {
            const formattedToday = this.today.replace(/-(\d)(?=-|$)/g, "-0$1");

            if (todo.dueDate === formattedToday) {
                const newTodo = createTodoElement(todo);
                this.contentContainer.appendChild(newTodo);
            }
        });
    }

    displayUpcomingTodos(todos) {
        this.clearContentContainer();

        let todosWithDate = [];

        todos.forEach((todo) => {
            if (todo.dueDate) {
                todosWithDate.push(todo);
            }
        });

        todosWithDate.forEach((todo) => {
            const formattedToday = this.today.replace(/-(\d)(?=-|$)/g, "-0$1");
            const formattedWeekFromToday = this.weekFromToday.replace(
                /-(\d)(?=-|$)/g,
                "-0$1"
            );

            if (
                todo.dueDate === formattedToday &&
                todo.dueDate >= formattedToday &&
                todo.dueDate <= formattedWeekFromToday
            ) {
                const newTodo = createTodoElement(todo);
                this.contentContainer.appendChild(newTodo);
            }
        });
    }

    displayAnytimeTodos(todos) {
        this.clearContentContainer();

        todos.forEach((todo) => {
            if (!todo.dueDate) {
                const newTodo = createTodoElement(todo);
                this.contentContainer.appendChild(newTodo);
            }
        });
    }

    displayImportanceTodos(todos) {
        this.clearContentContainer();

        const sortedTodos = todos.sort((a, b) => {
            const importanceA = a.importance;
            const importanceB = b.importance;
            return importanceA - importanceB;
        });

        sortedTodos.forEach((todo) => {
            if (todo.importance !== null) {
                const newTodo = createTodoElement(todo);
                this.contentContainer.appendChild(newTodo);
            }
        });
    }

    clearContentContainer() {
        this.contentContainer.innerHTML = "";
    }
}
