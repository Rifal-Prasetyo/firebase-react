import React from "react";
import { connect } from "react-redux";
class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleValueChange = (e)  => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterButton = () => {
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <h1>Login Page {this.props.popupProps ? "benar" : "salah"}</h1>
                <button>Register</button>
                <button>Dashboard</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup
})
export default connect(reduxState, null)(Login);