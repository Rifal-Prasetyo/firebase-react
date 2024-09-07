import React from "react";
import { connect } from "react-redux";
import {actionUserName} from '../../../config/redux/action'
class Login extends React.Component {

    changeUser = () => {
        this.props.changeUserName()
    }
    render() {
        return (
            <div>
                <h1>Login Page {this.props.userName}</h1>
                <button onClick={this.changeUser}>Change Name User</button>
                <button>Dashboard</button>
            </div>
        )
    }
}



const reduxState = (state) => ({
    popupProps: state.popup,
    userName: state.user
})
const reduxdispatch = (dispatch) => ({
    changeUserName: () => {
        dispatch(actionUserName())
    }
})
export default connect(reduxState, reduxdispatch)(Login);