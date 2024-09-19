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

        const formattedToday = new Date(
            this.today.replace(/-(\d)(?=-|$)/g, "-0$1")
        );
        const formattedWeekFromToday = new Date(
            this.weekFromToday.replace(/-(\d)(?=-|$)/g, "-0$1")
        );

        todosWithDate.forEach((todo) => {
            const todoDueDate = new Date(
                todo.dueDate.replace(/-(\d)(?=-|$)/g, "-0$1")
            );

            console.log(`todo due date: ${todoDueDate}`);
            console.log(`today date: ${formattedToday}`);
            console.log(`week from today date: ${formattedWeekFromToday}`);

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
