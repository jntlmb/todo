import { Todo } from "../models/Todo";
import { saveTodos } from "./localStorageHandler";

export function addTodo(
    todos,
    todoTitle,
    todoDescription,
    todoDueDate,
    todoImportance
) {
    const importanceMap = {
        high: "1",
        medium: "2",
        low: "3"
    };
    const newTodo = new Todo({
        title: todoTitle,
        description: todoDescription,
        dueDate: todoDueDate,
        importance: importanceMap[todoImportance] || null
    });

    todos.unshift(newTodo);
    saveTodos(todos); 
    return newTodo; 
}
