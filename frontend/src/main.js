import "./input.css";

import { Todo } from "./js/modules/Todo";
import { Project } from "./js/modules/Project";

const myTodos = [];

const firstTodo = new Todo("finish homework", "math, englisch", "12.03", "3");
const secondTodo = new Todo("go to gym", "push day", "12.03", "1");

myTodos.push(firstTodo);
myTodos.push(secondTodo);
