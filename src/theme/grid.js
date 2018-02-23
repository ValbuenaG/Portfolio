import styled, {css} from 'styled-components'
import media from './media'
import {blue, red} from './variable'

export const Div = styled.div`
  ${({marginBottom})=>marginBottom && css`
    margin-bottom: ${marginBottom};
  `}  
`
export const Container = styled(Div)`
  padding: 40px 120px 0 120px;
  ${
    media.phone`
    background-image: url('${require('../assets/hero.jpg')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    `
    
  }
  ${
    media.tablet`
    padding: 15px 30px 0 30px;`
  }
  
`


export const Relative = styled(Div)`
  position: relative;
`
export const Flex = styled(Div)`

  display:flex;
  justify-content:center;
  align-items:center;
  margin: 20px 0;
 

`

export const NavbarContainer = styled(Flex)`
  position:fixed;
  right:6.5em;
  top: 0em;
  ${
    media.phone`
    position: absolute;
    `
  }
`

export const NavItem = styled(Div)`
  margin-right: 30px;
  font-size: 1.5em;
  cursor:pointer;
  position:relative;
  &:hover{
    color:${blue};
    $:after {
      content: ' ';
      position:absolute;
      left: 0;
      top:0;
      width:100%;
      heigth: 100%;
      background-color:${red};
    }
  }
    ${
    media.phone`
    color: #fff8e1;
    `
  }
`
export const Social=styled(Div)`
display:flex;
`

/* ${({justify})=>justify && css `
    justify-content: ${justify};
  `}
  ${({align})=>align && css `
    align-items: ${align};
  `}
  ${({column})=>column && css `
    flex-direction: column;
  `}*/