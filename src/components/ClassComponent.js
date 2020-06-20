//This is importing the React Package as well as the Component Package!
import React, { Component } from 'react'

// Creating a javascript class 
export default class ClassComponent extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      nameInput: '',
      friends: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addFriend = () => {
    const { imageInput, nameInput, friends } = this.state
    let newFriends = friends.slice();
    newFriends.push({ picture: imageInput, name: nameInput })

    this.setState({
      friends: newFriends
    })
  }



  //render method: Required to return the display!
  render() {
    const { nameInput, friends } = this.state
    const mappedFriends = friends.map((e, i) => (

    ))
    return (
      <div>
        {/* <p>{nameInput}</p> */}
        <label>Picture:</label>
        <input />

        <label>Name:</label>
        <input name='nameInput' value={nameInput} onChange={(e) => this.handleChange(e)} />

        <button onClick={this.addFriend} >Add Friend</button>
      </div>
    )
  }
}