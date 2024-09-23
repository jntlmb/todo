import { createAddTodoModal } from "../components/addTodoModalTemplate";
import { createDetailsTodoModal } from "../components/detailsTodoModalTemplate";
import { createEditTodoModal } from "../components/editTodoModalTemplate";
import {
    setupAddTodoModalEventListener,
    setupDetailsTodoModalEventListener,
    setupEditTodoModalEventListener,
} from "../services/modalEventListener";

export class ModalUIController {
    constructor() {
        this.modalContainer = document.getElementById("modal-container");
    }

    displayAddTodoModal(todos) {
        createAddTodoModal();
        this.modalContainer.classList.remove("hidden");
        setupAddTodoModalEventListener(todos);
    }

    displayDetailsTodoModal(todo, todos) {
        createDetailsTodoModal(todo);
        this.modalContainer.classList.remove("hidden");
        setupDetailsTodoModalEventListener(todo, todos);
    }

    displayEditTodoModal(todo, todos) {
        createEditTodoModal(todo);
        this.modalContainer.classList.remove("hidden");
        setupEditTodoModalEventListener(todo, todos);
    }

    hideModal() {
        this.modalContainer.classList.add("hidden");
    }

    displayProjectModal() {}
}
