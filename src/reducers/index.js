import * as types from '../constants/ActionTypes'
import TODO from '../api/TodoApi'

export default (state = {
    todoList: [],
    status: "all"
}, action) => {



    switch (action.type) {
        case types.add: {
            var list = [...state.todoList];
            var id = TODO.generateUUID();
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


