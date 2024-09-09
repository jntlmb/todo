export class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._isFinished = false;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        newTitle = newTitle.trim();
        if (newTitle === "") {
            console.error("Title cannot be empty!");
        }
        this._title = newTitle;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        newDescription = newDescription.trim();
        if (newDescription === "") {
            console.error("Description cannot be empty!");
        }
        this._description = newDescription;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(newDueDate) {}
}
