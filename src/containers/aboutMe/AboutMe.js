import React from 'react'
import { HeroImage, RevealP, Asvg} from './home.style'

const AboutMe = (props)=>(
  <HeroImage>
    <h1>Gustavo Valbuena</h1>
    <h2>JS fullstack developer</h2>
    <RevealP>
      Hi!. I'm Gustavo and i'm a js fullstack developer, i'm currently working as a freelancer and looking for new adventures. I love React, Node and ES6. In my spare time i like to play the drums, write, read and hang out with my friends.
    </RevealP>
    <div>
      <Asvg href="https://github.com/ValbuenaG" target='_blank'>
        <img src={require('../../assets/github-sign.svg')} alt=""/>
      </Asvg>
      <Asvg href="https://twitter.com/ValbuenaG_" target='_blank'>
        <img src={require('../../assets/twitter.svg')} alt=""/>
      </Asvg>
      <Asvg href="https://www.linkedin.com/in/gustavo-valbuena-328a33159/" target='_blank'>
        <img src={require('../../assets/linkedin-logo.svg')} alt=""/>
      </Asvg>
    </div>
  </HeroImage>
)
export default AboutMe