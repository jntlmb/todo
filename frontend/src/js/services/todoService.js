import { saveTodos } from "./localStorageHandler";

export function addTodoAndSave(todos, todo) {
    todos.push(todo);
    saveTodos(todos);
}
