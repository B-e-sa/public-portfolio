import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import imageStyle from '../../utils/imageStyle';
import projects from '../../utils/projects';
import Arrow from './Arrow';

const LargeCarousel = () => {

    const [selectedImage, setSelectedImage] = useState<number>(1);

    const { windowWidth } = useContext(Context);

    const handlePreviousClick = () => {
        selectedImage != 0
            ? setSelectedImage(selectedImage - 1)
            : setSelectedImage(projects.length - 1)
    }

    const handleNextClick = () => {
        selectedImage != projects.length - 1
            ? setSelectedImage(selectedImage + 1)
            : setSelectedImage(0);
    }

    return (
        <Container>
            <div
                id='LargeCarousel-container'
                style={{
                    display: 'flex',
                    width: 1000,
                    justifyContent: 'center'
                }}
            >
                <Arrow
                    zIndex={5}
                    angle={180}
                    direction='left'
                    onclick={() => handlePreviousClick()}
                    style={windowWidth < 906 ? {
                        marginRight: -110,
                        top: 200
                    } : {}}
                />
                <ProjectsContainer>
                    <p style={{ position: 'relative', top: -170 }}>
                        You can click on the pictures to go to the source code
                    </p>
                    {projects.map(({ alt, src, title, link }, index) => {
                        return (
                            <a
                                key={title}
                                href={link}
                                target='_blank'
                            >
                                <Image
                                    style={imageStyle(index, selectedImage)}
                                    src={src}
                                    alt={alt}
                                    title={title}
                                />
                            </a>
                        )
                    })}
                    <Info>
                        <h1>{projects[selectedImage].title}</h1>
                        <p>{projects[selectedImage].description}</p>
                    </Info>
                </ProjectsContainer>
                <Arrow
                    zIndex={5}
                    direction='right'
                    onclick={() => handleNextClick()}
                    style={windowWidth < 906 ? {
                        marginLeft: -110,
                        top: 200
                    } : {}}
                />
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 590px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 265px;
    font-family: 'Raleway', sans-serif;
    font-size: 20pt;
    width: 500px;
    height: 230px;
    max-height: 270px;
`

const ProjectsContainer = styled.div`
    position: relative;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    position: absolute;
    transition: 
        width .5s, 
        height .5s, 
        top .5s, 
        left .5s, 
        filter .5s,
        right .5s;
    object-fit: cover;
`

export default LargeCarousel