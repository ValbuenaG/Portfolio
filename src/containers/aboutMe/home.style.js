import styled from 'styled-components'
import media from '../../theme/media'
export const Image = styled.img`
    width:100%;
`
export const HeroImage = styled.div`
    height: 100vh;
    background-image: url('${require('../../assets/hero.jpg')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius:10px;
    
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: #fff8e1;

    font-size: 2em;

    h1{
        margin-bottom: 0;
    }
    ${
    media.phone`
    background-image: none;`
    }
    `
export const RevealP = styled.p`
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
export const Asvg = styled.a`
    width: 25px;
    height: 30px;
    img{
        width: 25px;
        heigth:25px;
    }
    margin: 0 10px;

`