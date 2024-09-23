export function createEditTodoModal(todo) {
    const modalContainer = document.getElementById("modal-container");

    modalContainer.innerHTML = `
        <div
            class="fixed inset-0 flex items-center justify-center p-5 bg-gray-800 bg-opacity-75"
        >
            <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div class="flex justify-between">
                    <h2 class="mb-4 text-2xl font-semibold">Edit Todo</h2>
                    <button id="close-modal" class="mb-4">
                        <i class="text-2xl bi bi-x-square hover:opacity-75"></i>
                    </button>
                </div>
                <form id="edit-todo-form" action="">
                    <fieldset class="flex flex-col gap-3">
                        <div>
                            <input
                                class="w-full"
                                placeholder="Title"
                                required
                                type="text"
                                id="edit-todo-title"
                                value="${todo.title}"
                            />
                        </div>
                        <div>
                            <input
                                class="w-full"
                                placeholder="Description"
                                required
                                type="text"
                                id="edit-todo-description"
                                value="${todo.description}"
                            />
                        </div>
                        <div>
                            <input
                                class="w-full"
                                placeholder="Due Date"
                                type="date"
                                id="edit-todo-due-date"
                                value="${todo.dueDate}"
                            />
                        </div>
                        <div>
                            <select
                                class="w-full"
                                id="edit-todo-importance"
                            >
                                <option value="" disabled selected>
                                    Importance
                                </option>
                                <option value="high" ${todo.importance === "1" ? "selected" : ""}>High</option>
                                <option value="medium" ${todo.importance === "2" ? "selected" : ""}>Medium</option>
                                <option value="low" ${todo.importance === "3" ? "selected" : ""}>Low</option>
                            </select>
                        </div>
                        <button
                            id="save-changes-button"
                            class="self-center w-1/2 p-3 mt-3 text-white transition duration-150 rounded-md hover:bg-slate-700 bg-slate-800"
                            type="submit"
                        >
                            Save Changes
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    `;
}
