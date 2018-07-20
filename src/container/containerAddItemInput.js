import {connect} from 'react-redux'
import AddItemInput from "../component/addItemInput";
import {addItem} from "../actions/index";




const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        addItem:(content) => dispatch(addItem(content)),
    }

}
export default connect(null,mapDispatchToProps)(AddItemInput)