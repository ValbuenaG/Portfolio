import styled from 'styled-components'
import {yellow} from '../../theme/variable'
import media from '../../theme/media'
export const Index = styled.div`
    position:absolute;
    left:0;
    bottom: 0;
    z-index: -1;
    font-size: 2.5em;
    h2{
        margin:0;
        font-weight: bold;
        color:${yellow};
        opacity:0.4;
        transform: translateY(-20deg)
        }`

export const Title = styled.h1`
    ${media.phone`
        margin-top: 35px;
        margin-bottom: 0;
        color:#ffe0b2;
    `}
`


export const Image = styled.img`

    width:100vh;
    ${media.phone `
        width:100%;
    `}
    ${media.tablet `
        width:100%;
    `}
    border-radius:10px;

    
`
export const Claro = styled.img`
   height: 500px;
    ${media.phone `
        width:100%;
    `}
    ${media.tablet `
        width:100%;
    `}
    border-radius:10px;
`
export const ClaroContainer = styled.div`
    display:inline;
    margin: 0 30px 0 50px;
    ${media.phone`
        display:flex;
        justify-content:center;
        align-items:center;
        margin: 20px 0;
    `}
    ${media.tablet`
        display:flex;
        justify-content:center;
        align-items:center;
        margin: 20px 0;
    `}
`

export const ProjectContainer = styled.div`
 margin-bottom: 30px;
 padding: 20px;
`
export const RevealP = styled.p`
    ${media.phone`
        color:#fff8e1;
    `}
    position: relative;
    font-size: 22px;
    text-align: center;
    &:after{
        content: ' ';
        top:0;
        left:0;
        width: 100%;
        heigth: 100%;
        background-color: black;
        transform-origin: left;
        transform: rotateY(90deg)
        transition: transform 3s;
}

    
`