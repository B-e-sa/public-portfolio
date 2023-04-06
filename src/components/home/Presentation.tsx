import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import cat from '../../assets/cats/cat-image.webp';
import tail from '../../assets/cats/cat-tail.webp';
import Test from './StackDisplayer';
import { IStack, ITheme } from '../../types';
import breakpoints from '../../utils/breakpoints';
import { Context } from '../../context';

const Presentation = () => {

    const [displayedRole, setDisplayedRole] = useState('{ Front-End Developer }');
    const [verticalStackShowing, setVerticalStackShowing] = useState(false);

    const { usingDarkMode } = useContext(Context);

    const changeRole = () => {
        setTimeout(() => {

            setDisplayedRole('{ Back-End Developer }')

            setTimeout(() => {
                setDisplayedRole('{ Full-Stack Developer }')
            }, 900)

        }, 720)
    }

    useEffect(() => { changeRole() }, [])

    const handleVerticalStackDisplay = () => {
        verticalStackShowing
            ? setVerticalStackShowing(false)
            : setVerticalStackShowing(true);
    }

    return (
        <Container>
            <Content>
                <div style={{ position: 'relative' }} >
                    <CatQuote
                        style={{ transition: 'margin-left .5s' }}
                        isShowing={verticalStackShowing}
                        usingDarkMode={usingDarkMode}
                    >
                        CLICK <u style={{ cursor: 'pointer' }} onClick={handleVerticalStackDisplay}>HERE</u> TO {verticalStackShowing ? 'CLOSE' : 'SEE'} MY STACKS
                    </CatQuote>
                    <AnimatePresence>
                        {!verticalStackShowing &&
                            <motion.div exit={{ position: 'absolute', top: 20 }} >
                                <Cat usingDarkMode={usingDarkMode}>
                                    <img src={cat} alt='cat body' draggable='false' />
                                    <CatTail src={tail} alt='cat tail' draggable='false' />
                                </Cat>
                            </motion.div>
                        }
                    </AnimatePresence>
                    <Test conditional={verticalStackShowing} />
                </div>
                <NameAndRole>
                    <Name usingDarkMode={usingDarkMode}>
                        <p>JOÃO</p>
                        <p>BESA</p>
                    </Name>
                    <Role usingDarkMode={usingDarkMode} >
                        {displayedRole}
                    </Role>
                </NameAndRole>
            </Content>
        </Container >
    );
};

const CatQuote = styled.p<IStack>`
    text-align: center; 

    color: #c0c0c0 !important;

    u {
        color: ${props => props.usingDarkMode ? 'black' : 'white'} ;
    }

    @media ${breakpoints.default}{
        margin: 15px 0 15px 0;
    }

    margin-left: ${props =>
        props.isShowing
            ? 0
            : '-140px'
    }; 
    font-weight: bolder; 
    user-select: none;
`

const Content = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    width: 100vw;

    @media ${breakpoints.default} {
        justify-content: center;
        flex-direction: column-reverse;
    }

`

const CatTail = styled.img`
    align-self: flex-end;
    transform-origin: bottom left;
    margin-left: 2px;
    animation: tail-move 3s linear infinite alternate;

    @keyframes tail-move {
    0% {
        transform: rotate(-8deg);
    }

    100% {
        transform: rotate(5deg)
    }
}
`

const Cat = styled.div<ITheme>`
    ${({ usingDarkMode }) => usingDarkMode && {
        filter: 'invert(100%)'
    }}

    @media screen and (max-width: 815px) {
        display: none
    }
`

const NameAndRole = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 100pt;
    position: relative;
    overflow: hidden;
`

const Name = styled.div<ITheme>`

    color: ${props => props.usingDarkMode ? 'black' : 'white'};

    align-self: end;

    @media ${breakpoints.default} {
        align-self: center;
    }
`

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    display: flex;
`

const Role = styled.p<ITheme>`
    font-size: 30pt;
    color: rgb(184, 182, 182);

    &::after {
        content: "";
        position: absolute;
        background: ${props => props.usingDarkMode ? 'white' : 'black'};
        left: 0;
        width: 100%;
        height: 60px;
        border-left: 2px solid white;
        animation:
            typing 2s steps(13) forwards,
            cursor 1s infinite linear;
        }

    @keyframes typing {
        0% { left: 0% }
        20% { left: 30% }
        40% { left: 0% }
        60% { left: 30% }
        80% { left: 0% }
        100% { left: 99.6%; }
    }

    @keyframes cursor {
        0% { border: none; }
        100% { border-left: 2px solid white }
    }

    @media screen and (max-width: 440px){
        text-align: center;
        font-size: 25pt;
    }
`


export default Presentation;