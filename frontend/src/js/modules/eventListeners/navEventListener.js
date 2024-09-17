import { Todo } from "../Todo";
import { TodoUIController } from "../TodoUIController";

export function setupNavEventListener(todos, modalUIController, todoUIController) {
    document.querySelectorAll(".nav-btn").forEach((element) => {
        const action = element.getAttribute("data-action");

        element.addEventListener("click", () => {
            handleNavAction(action, todos, modalUIController, todoUIController, element);
        });
    });
}

function handleNavAction(action, todos, modalUIController, todoUIController, element) {
    const headings = document.querySelectorAll(".section-headings");

    const updateHeadingAndDisplay = (headingText, displayFunction) => {
        headings.forEach((heading) => {
            heading.textContent = headingText;
        });
        displayFunction(todos); 
        setActive(element);
    };

    switch (action) {
        case "add-todo":
            modalUIController.displayTodoModal(todos);
            break;
        case "my-todos":
            updateHeadingAndDisplay("My Todos", (todos) => todoUIController.displayAllTodos(todos));
            break;
        case "today":
            updateHeadingAndDisplay("Today", (todos) => todoUIController.displayTodayTodos(todos));
            break;
        case "upcoming":
            updateHeadingAndDisplay("Upcoming", (todos) => todoUIController.displayUpcomingTodos(todos));
            break;
        case "anytime":
            updateHeadingAndDisplay("Anytime", (todos) => todoUIController.displayAnytimeTodos(todos));
            break;
        case "importance":
            updateHeadingAndDisplay("Importance", (todos) => todoUIController.displayImportanceTodos(todos));
            break;
        case "add-project":
            console.log("add project btn pressed");
            break;
        case "my-projects":
            updateHeadingAndDisplay("My Projects", () => console.log("my projects btn pressed"));
            break;
    }
}

function setActive(btn) {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((button) => button.classList.remove("bg-gray-700"));
    btn.classList.add("bg-gray-700");
}
