import { ModalUIController } from "../ModalUIController";
import { TodoUIController } from "../TodoUIController";

const modalUIController = new ModalUIController();
const todoUIController = new TodoUIController();

export function setupNavEventListener(todos) {
    document.querySelectorAll(".nav-btn").forEach((element) => {
        const action = element.getAttribute("data-action");

        element.addEventListener("click", () => {
            switch (action) {
                case "add-todo":
                    modalUIController.displayTodoModal();
                    break;
                case "my-todos":
                    todoUIController.displayAllTodos(todos);
                    setActive(element);
                    break;
                case "today":
                    todoUIController.displayTodayTodos(todos);
                    setActive(element);
                    break;
                case "upcoming":
                    todoUIController.displayUpcomingTodos(todos);
                    setActive(element);
                    break;
                case "anytime":
                    todoUIController.displayAnytimeTodos(todos);
                    setActive(element);
                    break;
                case "importance":
                    todoUIController.displayImportanceTodos(todos);
                    setActive(element);
                    break;
                case "add-project":
                    console.log("add project btn pressed");
                    break;
                case "my-projects":
                    console.log("my projects btn pressed");
                    setActive(element);
                    break;
            }
        });
    });
}

function setActive(btn) {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((button) => button.classList.remove("bg-gray-700"));
    btn.classList.add("bg-gray-700");
}
