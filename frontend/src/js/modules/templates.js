export function createTodo(todo) {
    const container = document.createElement("div");
    let priorityColor = "";

    switch (String(todo.priority)) {
        case "1":
            priorityColor = "bg-red-600";
            break;
        case "2":
            priorityColor = "bg-orange-500";
            break;
        case "3":
            priorityColor = "bg-green-500";
            break;
        default:
            priorityColor = "bg-gray-500";
    }

    container.classList.add("p-4", "bg-gray-100", "mb-2", "rounded-md");

    container.innerHTML = `
    <h1 class="text-xl">${todo.title}</h1>
    <p>${todo.description}</p>
    <p>${todo.dueDate}</p>
    <p>Priority: <span class="inline-block h-[10px] w-[10px] ${priorityColor}"> </span></p>
    `;

    return container;
}
