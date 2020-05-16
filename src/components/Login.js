import React from 'react';
import firebase from '../firebase'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            error:null

        }
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            this.props.history.push('/');

        })
        .catch(error => {
            this.setState({error})
        });

    }
    render(){
        return(
            <div>
                <h1>Login</h1>
            </div>
        );

    }
}

export default Login;