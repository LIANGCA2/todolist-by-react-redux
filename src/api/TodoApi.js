import TODO from "../model/TODO"
const TodoApi = {


    filterByState(todoList,status){
       return todoList.filter((item)=>status==TODO.ALL?true:status==TODO.ACTIVE?!item.complete:item.complete)
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