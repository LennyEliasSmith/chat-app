import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import firebase, { auth, provider } from './firebase';
import Button from '@material-ui/core/Button'

class AppRouter extends React.Component{

  constructor(props){
    super(props);
    this.state = {user:null}
  }
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({user});
      }
    })
  }
  logOutUser = () =>{
    firebase.auth().signOut()
    .then(window.location ="/")

  }
    render(){
      return(
        <Router>
            <div className="app">
                <nav className="main-nav">
                  {!this.state.user && 
                  <div>
                    <Button variant="contained" color="primary">
                    <Link to='/login'>Login</Link>
                    </Button>
                    <Button variant="contained" color="secondary">
                    <Link to='/register'>Register</Link>
                    </Button>
                    </div>
                  }
                  {this.state.user && 
                    <a href="#!" onClick={this.logOutUser}> Logout </a>
                  }
                </nav>
                <Switch>
                  <Route path="/" exact component={() => <App user={this.state.user} />}/>
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                </Switch>
            </div>
        </Router>
      );
}

}
ReactDOM.render(<AppRouter/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
