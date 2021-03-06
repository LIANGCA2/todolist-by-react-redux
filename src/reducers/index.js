import * as types from '../constants/ActionTypes'
import TODO from '../api/TodoApi'

export default (state = {
    todoList: [],
    status: "all"
}, action) => {

    switch (action.type) {
        case types.add: {
           return {
               todoList:[...state.todoList,action.todo],
               status:state.status

           }

        }
        case types.changeCheckStatus:{


            var todoList = [...state.todoList];
            console.log(action.id);
            const todoLists = todoList.map((item)=>{
                return item.id === action.id?{...item,complete:!item.complete}:item
            })
           // console.log(todoLists);
            const newState = {
                todoList: todoLists.concat(), status: state.status
            }
            return newState;




            //
            // var todolist = [...state.todoList];
            // var iscomplete = todolist.find((item)=>item.id ==action.id).complete;
            // todolist.find((item)=>item.id ==action.id).complete = !iscomplete;
            // const newState = {
            //     todoList: todolist, status: state.status
            // }
            //
            // return newState;
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


