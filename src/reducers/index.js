import * as types from '../constants/ActionTypes'


export default (state = {
    todoList: [],
    status: "all"
}, action) => {



    switch (action.type) {
        case types.add: {
            var list = [...state.todoList];
            var id = generateUUID();
            list.push({id: id, content: action.content, complete: false})
            const newState = {
                todoList: list, status: state.status
            }
            return newState;
        }
        case types.changeCheckStatus:{

            var todolist = [...state.todoList];
            var iscomplete = todolist.find((item)=>item.id ==action.id).complete;
            todolist.find((item)=>item.id ==action.id).complete = !iscomplete;
            const newState = {
                todoList: todolist, status: state.status
            }

            return newState;
        }
        case types.changeTab:{


            var status = action.status
            const newState = {
                todoList: state.todoList, status: status
            }

            return newState;
        }
        case types.changeContent:{

            var todoList = [...state.todoList];
            todoList.find((item)=>item.id ==action.id).content = action.content;
            const newState = {
                todoList: todoList, status: state.status
            }

            return newState;
        }
        default:
            return state;

    }


}


const generateUUID = () => {
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