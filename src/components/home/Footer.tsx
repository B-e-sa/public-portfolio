import { useContext } from 'react';
import styled from 'styled-components';
import git from '../../assets/buttons/github.webp';
import linkedin from '../../assets/buttons/linkedin.webp';
import { Context } from '../../context';

const Footer = () => {

    const { usingDarkMode } = useContext(Context);

    return (
        <FooterContainer>
            <Nav
                id='logos-container'
                style={usingDarkMode ? { filter: 'invert(100%)' } : {}}
            >
                <a href='https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/' target='_blank'>
                    <PlatformImage
                        src={linkedin}
                        id='linkedin'
                        alt='linkedin-link'
                        width='45px'
                        height='45px'
                    />
                </a>
                <a href='https://github.com/B-e-sa' target='_blank'>
                    <PlatformImage
                        src={git}
                        id='github'
                        alt='github-link'
                        width='45px'
                        height='45px'
                    />
                </a>
            </Nav>
        </FooterContainer>
    );
};

const PlatformImage = styled.img`
    width: 45px;
`

const FooterContainer = styled.footer`
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