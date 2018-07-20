import {connect} from 'react-redux'
import AddItemInput from "../component/addItemInput";
import {addItem} from "../actions/index";
import TodoApi from "../api/TodoApi"
import Todo from "../model/TODO";



const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        addItem:(content) => {
            const todo = new Todo(content);
            TodoApi.addItem(todo);
            dispatch(addItem(todo))}
    }

}
export default connect(null,mapDispatchToProps)(AddItemInput)