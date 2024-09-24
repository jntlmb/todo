import "../input.css";

import { setupNavEventListener } from "./services/navEventListener";
import { ModalUIController } from "./controllers/ModalUIController";
import { TodoUIController } from "./controllers/TodoUIController";
import { storageAvailable, loadTodos } from "./services/localStorageHandler";

const todos = loadTodos(); 

if (storageAvailable("localStorage")) {
    console.log("Local storage is available");
} else {
    console.log("Local storage is not available");
}

const todoUIController = new TodoUIController();
const modalUIController = new ModalUIController();

todoUIController.displayAllTodos(todos);

setupNavEventListener(todos, modalUIController, todoUIController);
