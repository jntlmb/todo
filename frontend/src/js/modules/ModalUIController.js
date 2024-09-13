import { createTodoModal } from "./templates/todoModalTemplate";
import { setupModalEventListener } from "./eventListeners/modalEventListener";

export class ModalUIController {
    displayTodoModal() {
        const modalContainer = document.getElementById("modal-container");
        createTodoModal();
        modalContainer.classList.remove("hidden"); // Modal sichtbar machen
        setupModalEventListener();
    }

    hideTodoModal() {
        const modalContainer = document.getElementById("modal-container");
        modalContainer.classList.add("hidden"); // Modal verstecken
    }

    displayProjectModal() {
        // Noch umzusetzende Logik
    }
}
