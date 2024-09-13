import React from "react";
import Button from "../../../components/atoms/Button";
import { registerUserAPI } from "../../../config/redux/action";
import { connect } from "react-redux";
class Register extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleValueChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterButton = () => {
       const {email, password} = this.state;
       this.props.registerAPI({email, password});
    }
    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <input type="text" name="email" id="email" placeholder="Email" onChange={this.handleValueChange} />
                <input type="password" name="password" id="password" placeholder="Password" onChange={this.handleValueChange} />
                {/* <button onClick={this.handleRegisterButton}>Register</button> */}
                <Button onClick={this.handleRegisterButton} title={'Register'} loading={this.props.isLoading}/>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})
export default connect(reduxState, reduxDispatch)(Register);