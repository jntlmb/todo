export function createTodoModal() {
    const modalContainer = document.getElementById("modal-container");

    modalContainer.innerHTML = `
        <div
            id="add-todo-modal"
            class="fixed inset-0 flex items-center justify-center p-5 bg-gray-800 bg-opacity-75"
        >
            <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div class="flex justify-between">
                    <h2 class="mb-4 text-2xl font-semibold">Add Todo</h2>
                    <button class="mb-4">
                        <i id="close-modal" class="text-2xl bi bi-x-square hover:opacity-75"></i>
                    </button>
                </div>
                <form id="todo-form" action="">
                    <fieldset class="flex flex-col gap-3">
                        <div class="flex flex-row">
                            <input
                                class="w-full"
                                placeholder="Title"
                                required
                                type="text"
                                id="todo-title"
                                name="todo_title"
                            />
                        </div>
                        <div>
                            <input
                                class="w-full"
                                placeholder="Description"
                                required
                                type="text"
                                id="todo-description"
                                name="todo_description"
                            />
                        </div>
                        <div>
                            <input
                                class="w-full"
                                placeholder="Due Date"
                                type="date"
                                id="todo-due-date"
                                name="todo_due_date"
                            />
                        </div>
                        <div>
                            <select
                                class="w-full"
                                id="todo-importance"
                                name="todo_importance"
                            >
                                <option value="" disabled selected>
                                    Importance
                                </option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <button
                            id="add-button"
                            class="self-center w-1/2 p-3 mt-3 text-white transition duration-150 rounded-md hover:bg-slate-700 bg-slate-800"
                            type="submit"
                        >
                            Add
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    `;
}
