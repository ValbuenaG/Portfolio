import React , {Component} from 'react'
import {A} from '../../theme/types'
import {Relative, Flex} from '../../theme/grid'
import {Index, Image, ProjectContainer,
   RevealP, Claro, ClaroContainer, Title}  from './projects.style'
class Projects extends Component {
  state={}
  render(){
    return(
      <div>
        <Title >Those are my Projects</Title>
        <ProjectContainer>
        <Relative>
          <Index><h2>01</h2></Index>
          <h2><A href="https://github.com/ValbuenaG/react-videos" target='_blank'>React Videos</A></h2>
        </Relative>
        <Flex justify={'center'}>
          <Image src={require('../../assets/react-videos.png')} alt=""/>
        </Flex>
        <Flex justify={'center'}>
          <Image src={require('../../assets/react-videos2.png')} alt=""/>
        </Flex>
        <RevealP>React Videos is a little project i made with react and redux, here is the code in <A href="https://github.com/ValbuenaG/react-videos" target='_blank'>github</A> <a href=""></a></RevealP>
        </ProjectContainer>

        <ProjectContainer>
        <Relative>
          <Index><h2>02</h2></Index>
          <h2><A href="http://www.puntoart.com.ar/public/claro/" target='_blank'>Claro Conference</A></h2>
        </Relative>
        <ClaroContainer justify={'center'}>
          <Claro src={require('../../assets/claro.jpeg')} alt=""/>
        </ClaroContainer>
        <ClaroContainer justify={'center'}>
          <Claro src={require('../../assets/claro1.jpeg')} alt=""/>
        </ClaroContainer>
        <RevealP>This is a Website i developed for Claro Argentina, the stack that i used was php, foundation and MySql. You can take a look in <A href='http://www.puntoart.com.ar/public/claro/' target='_blank'>here.</A></RevealP>
        </ProjectContainer>

        <ProjectContainer>
        <Relative>
          <Index><h2>03</h2></Index>
          <h2><A href="https://github.com/ValbuenaG/ig-clone" target='_blank'>Intagram Clone</A></h2>
        </Relative>
        <Flex justify={'center'}>
          <Image src={require('../../assets/ig-clone.jpeg')} alt=""/>
        </Flex>
        <RevealP>This is a clone of instagram that i made to put in practice my what i've learned in Node, GraphQL, Mongo and React. it's not finish yet but you can look the code in <A href='https://github.com/ValbuenaG/ig-clone' target='_blank'>Github</A></RevealP>
        </ProjectContainer>

        <ProjectContainer>
        <Relative>
          <Index><h2>04</h2></Index>
          <h2><A href="https://github.com/ValbuenaG/gameJs" target='_blank'>Simon Dice</A></h2>
        </Relative>
        <Flex justify={'center'}>
          <Image src={require('../../assets/SimonDice.jpeg')} alt=""/>
        </Flex>
        <Flex justify={'center'}>
          <Image src={require('../../assets/SimonDice2.jpeg')} alt=""/>
        </Flex>
        <RevealP>A little game i developed with javascript and Bootstrap, here is the <A href='https://github.com/ValbuenaG/gameJs' target='_blank'>code</A></RevealP>
        </ProjectContainer>

      </div>
    )
  }
}
export default Projects