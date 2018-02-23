import React, { Component } from 'react';
import {Container, NavItem, NavbarContainer} from './theme/grid'
import Projects from './containers/projects/Projects'
import AboutMe from './containers/aboutMe/AboutMe'

class App extends Component {
  state={
      showAboutMe: true,
      showProjects: false
  }
  handleProjects=(e)=>{
    this.setState({
      showAboutMe: false,
      showProjects: true,
    })
  }
  handleAboutme=(e)=>{
    this.setState({
      showAboutMe:true,
      showProjects: false
    })
  }

  render() {
    const {showAboutMe, showProjects} = this.state
    return (
      <div>
      <NavbarContainer>
          
        <NavItem onClick={this.handleAboutme}><a >AboutMe</a></NavItem>
        <NavItem onClick={this.handleProjects}><a >Projects</a></NavItem>
        
        </NavbarContainer>
      <Container>

        {showAboutMe && (
          <AboutMe/>
        )}
        {showProjects &&(
            <Projects/>
        )}
      </Container>
      </div>
    );
  }
}

export default App;
