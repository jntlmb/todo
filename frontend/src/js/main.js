import "../input.css";

import { setupNavEventListener } from "./services/navEventListener";
import { ModalUIController } from "./controllers/ModalUIController";
import { Todo } from "./models/Todo";
import { TodoUIController } from "./controllers/TodoUIController";

const todos = [];

const firstTestTodo = new Todo({
    title: "1. test-todo",
    description: "today & high importance",
    dueDate: "2024-09-18",
    importance: "1"
});
const secondTestTodo = new Todo({
    title: "2. test-todo",
    description: "in week & medium importance",
    dueDate: "2024-09-23",
    importance: "2"
});
const thirdTestTodo = new Todo({
    title: "3. test-todo",
    description: "not in week & low importance",
    dueDate: "2024-09-28",
    importance: "3"
});
const fourthTestTodo = new Todo({
    title: "4. test-todo",
    description: "no due date & no importance"
});

todos.push(firstTestTodo);
todos.push(secondTestTodo);
todos.push(thirdTestTodo);
todos.push(fourthTestTodo);

const modalUIController = new ModalUIController();
const todoUIController = new TodoUIController();

todoUIController.displayAllTodos(todos);

setupNavEventListener(todos, modalUIController, todoUIController);
