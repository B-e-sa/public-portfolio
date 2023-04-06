import { useContext } from 'react'
import styled from 'styled-components'
import devCat from '../../assets/cats/dev-cat.webp'
import light from '../../assets/cats/light.webp'
import { Context } from '../../context'

const AboutMe = () => {

    const { usingDarkMode } = useContext(Context);

    return (
        <Container id='about-me-container'>
            <hr />
            <Content>
                <ImageContainer
                    id='about-me-image-container'
                    style={{
                        filter: usingDarkMode
                            ? 'invert(100%)'
                            : ''
                    }}
                >
                    <LightSpark
                        id='light'
                        src={light}
                        alt='light-bulb'
                    />
                    <DevCat
                        src={devCat}
                        alt='dev-cat'
                        className='non-draggable'
                    />
                </ImageContainer>
                <Info>
                    <h2> About me </h2>
                    <div>
                        <p>
                            Hi! Im João, a Computer Science student
                            and self-taught full-stack developer.
                        </p>
                        <p>
                            I'm currently expanding my knowledge of Angular and Vue.
                            Scroll down to see some of my projects!
                        </p>
                        <p>{' (some of them are on default HTML/JS, and will be migrated over time)'}</p>
                    </div>
                </Info>
            </Content>
            <hr />
        </Container>
    )
}

const DevCat = styled.img`
    width: 250px; 
    position: absolute;

    @media screen and (max-width: 815px) {  
        display: none;
    }

`

const ImageContainer = styled.div`
    width: 250px;
    position: relative;

    @media screen and (max-width: 815px) {  
        display: none;
    }

`

const Info = styled.div`

    width: 500px;
    margin-left: 50px;
    font-family: 'Raleway', sans-serif;

    h2 { font-size: 25pt; }

    p {
        font-size: 18pt;
        margin-bottom: 10px;
    }

    p:nth-child(3) {
        color: rgb(112, 103, 103);
        font-size: 14pt;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 815px) {  
        margin-right: 25px;
        margin-left: 25px;
    }

`

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 370px;

    @media screen and (max-width: 815px) {
        align-items: unset;
    }

`

const Content = styled.div`
    display: flex;
    justify-content: center;
`

const LightSpark = styled.img`
   
    @keyframes twinkle {
        0% {  filter: opacity(100%); }
        100% { filter: opacity(20%); }
    }

    position: absolute;
    width: 70px;
    left: 90px;
    top: -8px;
    animation: twinkle 1s linear infinite alternate;
`

export default AboutMe