export class ProjectUIController {
    constructor() {
        this.contentContainer = document.getElementById("content-container");

        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();

        this.today = `${this.year}-${this.month}-${this.day}`;
        this.weekFromToday = `${this.year}-${this.month}-${this.day + 7}`;
    }

    displayAllProjects() {
        this.clearContentContainer();

        this.contentContainer.innerHTML = `
        <h2>Project Support Coming Soon...</h2>
        `;
    }

    clearContentContainer() {
        this.contentContainer.innerHTML = "";
    }
}
