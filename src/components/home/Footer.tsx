import { useContext } from 'react';
import styled from 'styled-components';
import git from '../../assets/buttons/github.webp';
import linkedin from '../../assets/buttons/linkedin.webp';
import { Context } from '../../context';
import ExternalLink from './ExternalLink';

const Footer = () => {

    const { usingDarkMode } = useContext(Context);

    return (
        <Container>
            <Nav
                id='logos-container'
                style={usingDarkMode ? { filter: 'invert(100%)' } : {}}
            >
                <ExternalAnchor href='https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/' target='_blank'>
                    <PlatformImage
                        src={linkedin}
                        id='linkedin'
                        alt='linkedin-link'
                        width='45px'
                        height='45px'
                        title='LinkedIn'
                    />
                    <ExternalLink />
                </ExternalAnchor>
                <ExternalAnchor href='https://github.com/B-e-sa' target='_blank'>
                    <PlatformImage
                        src={git}
                        id='github'
                        alt='github-link'
                        width='45px'
                        height='45px'
                        title='Git'
                    />
                    <ExternalLink />
                </ExternalAnchor>
            </Nav>
        </Container>
    );
};

const PlatformImage = styled.img`
    width: 45px;
`

const ExternalAnchor = styled.a`
    display: flex;
    align-items: flex-start;
`

const Container = styled.footer`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 120px;
`

const Nav = styled.nav`
    display: flex;
    width: 110px;
    justify-content: space-between;
    padding-bottom: 25px;
`

export default Footer;