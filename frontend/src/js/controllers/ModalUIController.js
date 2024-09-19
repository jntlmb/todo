import { createAddTodoModal } from "../components/addTodoModalTemplate";
import { createDetailsTodoModal } from "../components/detailsTodoModalTemplate";
import {
    setupAddTodoModalEventListener,
    setupDetailsTodoModalEventListener
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

    displayDetailsTodoModal(todo) {
        createDetailsTodoModal(todo);
        this.modalContainer.classList.remove("hidden");
        setupDetailsTodoModalEventListener();
    }

    hideModal() {
        this.modalContainer.classList.add("hidden");
    }

    displayProjectModal() {
        // Noch umzusetzende Logik
    }
}
