import React, { Component } from 'react';
import './App.css';
import fire from './firebaseConfig';
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            nameuser: ''
          };
          this.database=fire.database().ref().child('Name');
    }
  
    componentDidMount(){
        this.database.on('value', snap=>{
            this.setState({
                nameuser: snap.val()
            });
        });
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
           <h1>Welcome {this.state.nameuser}</h1>
           <button type="submit" onClick={this.logout} class="btn btn-primary">Logout</button>
           </div>
);
    }
}

export default Home;