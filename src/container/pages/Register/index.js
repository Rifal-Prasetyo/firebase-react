import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
class Register extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleValueChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterButton = () => {
        console.log(this.state);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed up 
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
    }
    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <input type="text" name="email" id="email" placeholder="Email" onChange={this.handleValueChange} />
                <input type="password" name="password" id="password" placeholder="Password" onChange={this.handleValueChange} />
                <button onClick={this.handleRegisterButton}>Register</button>
            </div>
        )
    }
}

export default Register;