
import React, { Component } from "react"
import "./App.css"
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"

class App extends Component {

  componentDidMount(){
  fetch('/new-message')
    .then(res => res.json())
  }
  render() {
    return (
        <h3> A Button to redirect here</h3>
    )
  }
}

export default App
