import React from "react";

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
                <h1>Login Page</h1>

                <button>Register</button>
                <button>Dashboard</button>
            </div>
        )
    }
}

export default Login;