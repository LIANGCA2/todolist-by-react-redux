import TODO from "../model/TODO"
const TodoApi = {
    todos: [],
    staus:"all",

    filterByState(status){
        console.log("gggg")
        console.log(this.todos)
       return this.todos.filter((item)=>status==TODO.ALL?true:status==TODO.ACTIVE?!item.complete:item.complete)
    },
    changeStatus(status){
        this.staus = status;
    },
    changeContent(id,content){
        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {
            todo.changeContent(content);
        }
        return todo;
    },
    getAllItem(){

      return this.todos;
    },
    getStatus(){
      return this.staus;
    },
    changeCheckStatus(id){
        //
        // this.todos.map((item)=>{
        //     return item.id === id ?{...item,complete:!item.complete}:item
        // })
        // console.log(this.todos);


        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {
            todo.toggleActive();
        }
        return todo;


    },
    addItem(todo){

        this.todos.push(todo)
    },
    generateUUID() {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }



}
export default TodoApi