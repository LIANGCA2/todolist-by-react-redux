import {connect} from 'react-redux'
import TodoList from "../component/todoList";
import {changeCheckStatus,changeContent} from "../actions/index";


const mapStateToProps = (state, ownProps) =>{

    return {

        todoList: state.todoList.filter((item)=>state.status=="all"?true:state.status=="active"?!item.complete:item.complete)
    }
}


const mapDispatchToProps = (dispatch,ownProps)=> {
    return {
        changeCheckStatus: (id) => dispatch(changeCheckStatus(id)),
        changeContent:(id, content) =>dispatch(changeContent(id, content))
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)