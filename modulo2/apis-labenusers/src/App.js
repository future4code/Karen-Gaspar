import React from "react";
import styled from "styled-components"
import UsersPage from "./Components/UsersPage"
import RegistrationPage from "./Components/RegistrationPage"

const Pages = styled.div`
background-color: black;
color: whitesmoke;
display: flex;
justify-content: center;`


export default class App extends React.Component {

  state = {
    currentPage: "registration"
  }

  changePage = () => {
    switch (this.state.currentPage) {
      case "registration":
        return <RegistrationPage toUsersPage={this.toUsersPage}/>
      case "users":
        return <UsersPage toRegistrationPage={this.toRegistrationPage}/>
      default:
        return <div>Error! Page not found!</div>
    }
  }

  toRegistrationPage = () => {
    this.setState({currentPage: "registration"})
  }

  toUsersPage = () => {
    this.setState({currentPage: "users"})
  }

  render() {
    return (
      <Pages>
        {this.changePage()}
      </Pages>
    )
  }
}