import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import projects from '../../utils/projects';
import Arrow from './Arrow';

const DefaultCarousel = () => {

    const [currentCard, setCurrentCard] = useState(0);

    const handlePreviousClick = (): void => {
        currentCard === projects.length - 1 ?
            setCurrentCard(0) : setCurrentCard(currentCard + 1);
    };

    const handleNextClick = (): void => {
        currentCard === 0 ?
            setCurrentCard(projects.length - 1) : setCurrentCard(currentCard - 1);
    };

    return (
        <Container>
            <ImagesContainer>
                <Arrow
                    onclick={() => handlePreviousClick()}
                    angle={180}
                    direction='left'
                />
                <a href={projects[currentCard].link} target='_blank'>
                    <ProjectImage
                        src={projects[currentCard].src}
                        alt={projects[currentCard].alt}
                        title={projects[currentCard].title}
                        width='280'
                        height='376'
                    />
                </a>
                <Arrow 
                    onclick={() => handleNextClick()}
                    direction='right'
                />
            </ImagesContainer>
            <Info style={{ minHeight: 160 }}>
                <h1>{projects[currentCard].title}</h1>
                <p >{projects[currentCard].description}</p>
            </Info>
        </Container>
    )
}

const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 100px;
    font-size: 20pt;
    margin-top: 20px;
    font-family: 'Raleway', sans-serif;
`

const ProjectImage = styled.img`
    width: 280px;
    margin-left: 10px;
    margin-right: 10px;
`

export default DefaultCarousel