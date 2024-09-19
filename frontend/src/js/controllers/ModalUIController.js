import { createAddTodoModal } from "../components/addTodoModalTemplate";
import { createDetailsTodoModal } from "../components/detailsTodoModalTemplate";
import { setupAddTodoModalEventListener } from "../services/modalEventListener";

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
        createDetailsTodoModal();
        this.modalContainer.classList.remove("hidden");
    }

    hideTodoModal() {
        this.modalContainer.classList.add("hidden");
    }

    displayProjectModal() {
        // Noch umzusetzende Logik
    }
}
