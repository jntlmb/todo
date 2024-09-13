import "../input.css";

import { setupNavEventListener } from "./modules/eventListeners/navEventListener";
import { Todo } from "./modules/Todo";
import { TodoUIController } from "./modules/TodoUIController";

const todos = [];

const firstTestTodo = new Todo({
    title: "add 'add todo'-modal",
    description: "modal to enter todo-data",
    dueDate: "11.09.24",
    importance: "1"
});

const secondTestTodo = new Todo({
    title: "test title two",
    description: "test description",
    dueDate: "20.04.13",
    importance: "3"
});

todos.push(firstTestTodo);
todos.push(secondTestTodo);

setupNavEventListener(todos);
