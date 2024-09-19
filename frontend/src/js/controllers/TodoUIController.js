import { createTodoElement } from "../components/todoTemplate";

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
        let todosWithDate = todos.filter((todo) => todo.dueDate);

        const formattedToday = new Date(this.today);

        todosWithDate.forEach((todo) => {
            const todoDueDate = new Date(todo.dueDate);

            if (
                todoDueDate.getFullYear() === formattedToday.getFullYear() &&
                todoDueDate.getMonth() === formattedToday.getMonth() &&
                todoDueDate.getDate() === formattedToday.getDate()
            ) {
                const newTodo = createTodoElement(todo);
                this.contentContainer.appendChild(newTodo);
            }
        });
    }

    displayUpcomingTodos(todos) {
        this.clearContentContainer();

        let todosWithDate = todos.filter((todo) => todo.dueDate);

        todosWithDate.sort((a, b) => {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });

        const formattedToday = new Date(this.today);
        const formattedWeekFromToday = new Date(this.weekFromToday);

        todosWithDate.forEach((todo) => {
            const todoDueDate = new Date(todo.dueDate);

            if (
                todoDueDate >= formattedToday &&
                todoDueDate <= formattedWeekFromToday
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

        const todosCopy = [...todos];

        const sortedTodos = todosCopy.sort((a, b) => {
            const importanceA = a.importance;
            const importanceB = b.importance;
            return importanceA - importanceB;
        });

        sortedTodos.forEach((todo) => {
            if (
                todo.importance !== null &&
                todo.importance !== undefined &&
                !isNaN(todo.importance)
            ) {
                const newTodo = createTodoElement(todo);
                this.contentContainer.appendChild(newTodo);
            }
        });
    }

    clearContentContainer() {
        this.contentContainer.innerHTML = "";
    }
}
