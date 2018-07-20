export default class Todo {

    constructor(content) {
        this.content = content;
        this.status = Todo.ACTIVE;
    }

    static get ACTIVE() {
        return "active";
    }

    static get COMPLETED() {
        return "complete";
    }

    static get ALL() {
        return "all";
    }
}
