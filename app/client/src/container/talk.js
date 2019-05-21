import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import './talk.css';
import axios from "axios";

class Talk extends Component {
    state = {
      data: [],
      id: 0,
      message: null,
      people_id: 0,
    };
    componentDidMount() {
      this.getDataFromDb();
    }
    getDataFromDb = () => {
      fetch("http://localhost:3001/api/getData")
        .then(data => data.json())
        .then(res => this.setState({ data: res.data }));
    };
    putDataToDB = message => {
      let currentIds = this.state.data.map(data => data.id);
      let idToBeAdded = 0;
      while (currentIds.includes(idToBeAdded)) {
        ++idToBeAdded;
      }
      axios.post("http://localhost:3001/api/putData", {
        id: idToBeAdded,
        message: message
      });
    };
    render() {
      const { data } = this.state;
      return (
        <div class="container">
          <h1>Welcome to My Chat!</h1>
          <div class="chat-container">
            {data.map(dat => (
            <div class="talk-container">
            <img class="img-container"></img>
              <p class="theTalk">{dat.message}</p>
            </div>))}
              <input type="text" onChange={e => this.setState({ message: e.target.value })}
                    placeholder="Message ..."></input>
              <button onClick={() => this.putDataToDB(this.state.message)}>Send</button>
          </div>
        </div>
      );
    }
  }
  
  export default Talk;
  