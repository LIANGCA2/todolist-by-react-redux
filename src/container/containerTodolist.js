import {connect} from 'react-redux'
import TodoList from "../component/todoList";
import {changeCheckStatus,changeContent} from "../actions/index";
import TodoApi from "../api/TodoApi"


const mapStateToProps = (state, ownProps) =>{

    return {

        // todoList:TodoApi.filterByState(state.todoList,state.status)
        todoList:TodoApi.filterByState(TodoApi.getStatus())
    }
}


const mapDispatchToProps = (dispatch,ownProps)=> {
    return {
        changeCheckStatus: (id) => {

            TodoApi.changeCheckStatus(id);
            dispatch(changeCheckStatus(id))
        },
        changeContent:(id, content) =>{
            TodoApi.changeContent(id,content);
            dispatch(changeContent(id, content))
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)