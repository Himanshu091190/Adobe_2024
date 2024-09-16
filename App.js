import logo from './logo.svg';
import './App.css';
import React from "react";

// component
function App(props) {
  return (
    <div className="App">
      {/* <h1>Message from App Component is {props.title}</h1> */}
      {/* <MyData  username="Himanshu Code from parent"/>
      <MyData  username={props.title}/> */}

      <Homepage />
      
    </div>
  );
}

function MyData(props) {
  return(
    <h1>{props.username}</h1>
  );
}

// Message Component
function Message(props) {
  if(props.isLoggedIn)
    return <h1>Welcome User! You are successfully Logged in</h1>;
  else
    return <h1>Please Login User!</h1>;

}

// Login Component
function Login(props) {
  return <button onClick={props.clickFunc}>Login</button>;
}

// Logout Component
function Logout(props) {
  return <button onClick={props.clickFunc}>Logout</button>;
}

// HomePage Component
class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoggedIn: false};
    this.ifLoginClicked = this.ifLoginClicked.bind(this);
    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }
  ifLoginClicked() {
    this.setState({isLoggedIn: true});
  }
  
  ifLogoutClicked() {
    this.setState({isLoggedIn: false});
  }

  render() {
    return(
      <div>
        <Message isLoggedIn={this.state.isLoggedIn}/>
        {this.state.isLoggedIn ? (
          <Logout clickFunc={this.ifLogoutClicked} />
        ): (<Login clickFunc={this.ifLoginClicked} />)}
      </div>
    );
  }
}
export default App;
