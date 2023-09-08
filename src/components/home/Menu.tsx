import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import dark from '../../assets/buttons/dark.svg';
import light from '../../assets/buttons/light.svg';
import menu from '../../assets/buttons/menu.svg';
import externalLink from '../../assets/buttons/external-link.svg';
import { Context } from '../../context';
import Button, { IButton } from './Button';
import ExternalLink from './ExternalLink';

const Menu = () => {

    const [clicked, setClicked] = useState(false);
    const {
        usingDarkMode,
        setUsingDarkMode,
        isModalShowing,
        setIsModalShowing
    } = useContext(Context);

    const toggleDarkMode = () => {
        setUsingDarkMode(!usingDarkMode)
        localStorage.setItem('usingDarkMode', String(!usingDarkMode))
    }

    return (
        <Container>
            <div id='menu'>
                <Button as={MenuIcon}
                    height={35}
                    width={35}
                    image={menu}
                    ariaLabel='Open menu'
                    zIndex={1}
                    style={{
                        transform: clicked ? 'rotate(90deg)' : '',
                        filter: !usingDarkMode ? 'invert(100%)' : '',
                        backgroundColor: usingDarkMode ? 'transparent' : 'white'
                    }}
                    onclick={() => setClicked(!clicked)}
                />
                <Button as={ThemeIcon}
                    height={30}
                    width={30}
                    image={usingDarkMode ? dark : light}
                    style={{ filter: !usingDarkMode ? 'invert(100%)' : '' }}
                    onclick={() => toggleDarkMode()}
                    ariaLabel='Switch theme'
                    radius={100}
                    zIndex={1}
                />
            </div>
            <AnimatePresence>
                {clicked &&
                    <SideNav
                        as={motion.nav}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <a href='#about-me-container'>
                            <p>About me</p>
                        </a>
                        <a href="#projects">
                            <p>Projects</p>
                        </a>
                        <ExternalAnchor href="https://www.linkedin.com/in/joão-antônio-pereira-b4021b232/" target='blank'>
                            <p>LinkedIn</p>
                            <ExternalLink />
                        </ExternalAnchor>
                        <ExternalAnchor href="https://github.com/B-e-sa" target='blank'>
                            <p>GitHub</p>
                            <ExternalLink />
                        </ExternalAnchor>
                        <button>
                            <p
                                id='contact-button'
                                style={{ cursor: "pointer" }}
                                onClick={() => setIsModalShowing(!isModalShowing)}
                            >
                                Contact me
                            </p>
                        </button>
                    </SideNav>}
            </AnimatePresence>
        </Container>
    );
};

const ExternalAnchor = styled.a`
    display: flex;
`

const ThemeIcon = styled.button<IButton>`
    position: absolute;
    left: 70px;
    top: 28px;
    border-radius: 35%;
    background-color: white;

    @media screen and (max-width: 730px) {
        left: 90%;
    }
`

const MenuIcon = styled.button`
    position: absolute;
    margin: 26px;
    transition: transform 0.5s;
`

const Container = styled.header`
    position: sticky;
    top: 0;
    z-index: 3;
`

const SideNav = styled.nav`

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        border: none;
        font-size: 12pt;
        font-weight: bold;
        font-family: 'Raleway', sans-serif;
        align-items: flex-start;
        background-color: transparent;
    }

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    font-size: 12pt;
    font-weight: bold;
    font-family: 'Raleway', sans-serif;
    margin: 70px 25px 25px 25px;

    p {
        margin: 5px 0 5px 0;
    }

    @media screen and (max-width: 730px) {
        flex-direction: row;
        font-size: 15pt;
        margin: 30px 0 0 70px;

        a, button {
            align-items: flex-start;
            border: 1px solid white;
            background-color: black;
        }

        p {
            color: white !important;
            margin: 0 5px 0 5px;
            padding: 5px;
        }

  }
  `

export default Menu;