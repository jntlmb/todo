import "../input.css";

import { setupNavEventListener } from "./modules/eventListeners/navEventListener";
import { ModalUIController } from "./modules/ModalUIController";
import { Todo } from "./modules/Todo";
import { TodoUIController } from "./modules/TodoUIController";

const todos = [];
const modalUIController = new ModalUIController();
const todoUIController = new TodoUIController();

setupNavEventListener(todos, modalUIController, todoUIController);

