import { ModalUIController } from "../controllers/ModalUIController";

export function createTodoElement(todo) {
    const container = document.createElement("div");

    let dueDate = todo.dueDate;
    if (dueDate === null) {
        dueDate = "";
    }

    let importanceClass = "";
    switch (todo.importance) {
        case "1":
            importanceClass = "bg-red-600";
            break;
        case "2":
            importanceClass = "bg-amber-500";
            break;
        case "3":
            importanceClass = "bg-green-500";
            break;
        default:
            importanceClass = "bg-gray-500";
    }

    container.classList.add(
        "todo-item",
        "p-4",
        "border-b-[1px]",
        "border-gray-300",
        "mb-2",
        "flex",
        "justify-between",
        "cursor-pointer",
        "transition",
        "duration-150",
        "hover:bg-gray-200",
        "hover:rounded-md",
        "hover:border-gray-300"
    );

    container.innerHTML = `
    <div class="flex gap-5">
        <div class="self-center">
            <input id="checkbox" type="checkbox" class="cursor-pointer"></input>
        </div>
        <div>
            <h1 class="text-xl overflow-hidden">${todo.title}</h1>
            <p class="overflow-hidden">${todo.description}</p>
            <p>${dueDate}</p>
        </div>
    </div>
    <p><span class="inline-block h-full w-[5px] rounded-md ${importanceClass}"></span></p>
    `;

    const checkbox = container.querySelector("#checkbox");
    const updateTodoUI = () => {
        if (todo.isFinished) {
            container.classList.add("line-through");
            checkbox.checked = true;
        } else {
            container.classList.remove("line-through");
            checkbox.checked = false;
        }
    };

    checkbox.addEventListener("change", (e) => {
        todo.isFinished = e.target.checked;
        updateTodoUI();
    });

    checkbox.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    container.addEventListener("click", () => {
        const modalUIController = new ModalUIController();
        modalUIController.displayDetailsTodoModal(todo);
    });

    updateTodoUI();

    return container;
}
