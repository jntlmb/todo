export function setupModalEventListener() {
    const modalContainer = document.getElementById("modal-container");
    const modalCloseBtn = document.getElementById("close-modal");
    const addBtn = document.getElementById("add-button");

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            modalContainer.innerHTML = "";
            modalContainer.classList.add("hidden");
        });
    }
}
