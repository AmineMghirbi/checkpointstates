import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Person:{
        fullName:"Amine Mghirbi",
        bio:"BIO",
        imgSrc:"/profileImgs/img1.jpg",
        profession:"Engineer"
      },
      shows:true,
      counter:0
    }
    this.toggleShowState=()=>{
      console.log(!this.state.shows);
      this.setState({
        shows:!this.state.shows
      })
    }
    this.incrementCounter=()=>{
      this.setState({
        counter:this.state.counter+1
      })
    }
  }
  componentDidMount(){
    console.log("Component did mount");
    setInterval(this.incrementCounter, 1000);
  }
  render() {
    return (
      <>
      <button onClick={this.toggleShowState}>Toggle show state</button>
      {this.state.shows?
            <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <h1>{this.state.Person.profession}</h1>
            <img src={this.state.Person.imgSrc}/>
           </div>  
           :
           null
      }
      <h3>{this.state.counter}s</h3>
      </>
    )
  }
}

export default App

