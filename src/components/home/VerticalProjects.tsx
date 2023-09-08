import styled from 'styled-components';
import projects from '../../utils/projects';

const VerticalProjects = (): JSX.Element => {
    return (
        <Container>
            <p>You can click on the images to see more</p>
            {projects.map(({ alt, description, link, src, title }) => {
                return (
                    <a href={link} target='_blank' key={alt}>
                        <img
                            src={src}
                            alt={description}
                            title={title}
                            width='280'
                            height='376'
                        />
                    </a>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default VerticalProjects;