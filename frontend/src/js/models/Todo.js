export class Todo {
    constructor({
        title,
        description,
        dueDate = null,
        importance = null,
        isFinished = false
    }) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.importance = importance;
        this.isFinished = isFinished;
    }
}
