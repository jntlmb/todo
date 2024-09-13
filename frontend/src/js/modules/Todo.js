export class Todo {
    constructor({ title, description, dueDate = null, importance = null }) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._importance = importance;
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

    get importance() {
        return this._importance;
    }

    set importance(newImportance) {
        const importanceClasses = ["1", "2", "3"];
        if (!importanceClasses.includes(newImportance)) {
            console.log("unavailable importance class");
        }

        this._importance = newImportance;
    }
}
