import {connect} from 'react-redux'
import FilterList from "../component/filterList";
import {addItem, changeTab} from "../actions/index";



const mapStateToProps = (state, ownProps) => {

    return {

        status: state.status
    }
}

    const mapDispatchToProps = (dispatch,ownProps)=>{

        return {
            changeTab:(status) => dispatch(changeTab(status)),
        }

    }



export default connect(mapStateToProps,mapDispatchToProps)(FilterList)