import "./input.css";

import { Todo } from "./js/modules/Todo";
import { DomHandler } from "./js/modules/DomHandler";

const allTodos = [];

const domHandler = new DomHandler();

const firstTestTodo = new Todo("test titel", "test description", "12.01", "2");
const secondTestTodo = new Todo("code", "finish todo list", "24.09", "1");
const thirdTestTodo = new Todo("code", "finish todo list", "24.09", "1");
const fourthTestTodo = new Todo("code", "finish todo list", "24.09", "1");
const sixthTestTodo = new Todo("code", "finish todo list", "24.09", "1");
const seventhTestTodo = new Todo("code", "finish todo list", "24.09", "1");
const eigthTestTodo = new Todo("code", "finish todo list", "24.09", "1");
const ninethTestTodo = new Todo("code", "finish todo list", "24.09", "1");
const tenthTestTodo = new Todo("code", "finish todo list", "24.09", "1");

allTodos.push(firstTestTodo);
allTodos.push(secondTestTodo);
allTodos.push(thirdTestTodo);
allTodos.push(fourthTestTodo);
allTodos.push(sixthTestTodo);
allTodos.push(seventhTestTodo);
allTodos.push(eigthTestTodo);
allTodos.push(ninethTestTodo);
allTodos.push(tenthTestTodo);

domHandler.printAllTodos(allTodos);
