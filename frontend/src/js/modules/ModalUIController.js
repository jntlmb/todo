import { createTodoModal } from "./templates/todoModalTemplate";
import { setupModalEventListener } from "./eventListeners/modalEventListener";

export class ModalUIController {
    constructor () {
        this.modalContainer = document.getElementById("modal-container");
    }

    displayTodoModal(todos) {
        
        createTodoModal();
        this.modalContainer.classList.remove("hidden");
        setupModalEventListener(todos);
    }

    hideTodoModal() {
        this.modalContainer.classList.add("hidden");
    }

    displayProjectModal() {
        // Noch umzusetzende Logik
    }
}
