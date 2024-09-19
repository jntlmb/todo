export function createDetailsTodoModal(todo) {
    const modalContainer = document.getElementById("modal-container");

    modalContainer.innerHTML = `
        <div
            class="fixed inset-0 flex items-center justify-center p-5 bg-gray-800 bg-opacity-75"
        >
            <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div class="flex justify-between">
                    <h2 id="todo-title" class="mb-4 text-2xl font-semibold">${todo.title}</h2>
                    <button class="mb-4">
                        <i
                            id="close-modal"
                            class="text-2xl bi bi-x-square hover:opacity-75"
                        ></i>
                    </button>
                </div>
                <div class=mb-3 id=description-section>
                    <p class="font-semibold">Description</p>
                    <p id="todo-description">${todo.description}</p>
                </div>
                <div id="due-date-section">
                </div>
                <div class="flex justify-center gap-3">
                    <button
                        id="delete-button"
                        class="w-1/2 p-3 mt-3 text-white transition duration-150 bg-gray-400 rounded-md hover:bg-gray-500"
                    >
                        <i class="bi bi-trash"></i>
                        Delete
                    </button>
                    <button
                        id="edit-button"
                        class="w-1/2 p-3 mt-3 text-white transition duration-150 rounded-md bg-slate-800 hover:bg-slate-900"
                    >
                        <i class="bi bi-pencil-fill"></i>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    `;

    if (todo.dueDate) {
        const dueDateSection = document.getElementById("due-date-section");
        dueDateSection.innerHTML = `
            <p class="font-semibold">Due Date</p>
            <p id="todo-due-date">${todo.dueDate}</p>
        `;
    }
}
