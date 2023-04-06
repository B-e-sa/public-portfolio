import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import breakpoints from '../../utils/breakpoints';
import { IStack } from '../../types';
import StackButtons from './StackButton';

const Test = ({ conditional }: { conditional: boolean }) => {

    const {
        usingDarkMode,
        displayedStack,
        windowWidth
    } = useContext(Context);

    return (
        <AnimatePresence>
            {conditional &&
                <Container as={motion.div}
                    usingDarkMode={usingDarkMode}
                    initial={{ transform: 'scale(1,0)' }}
                    animate={{ transform: 'scale(1)' }}
                    exit={{
                        position: windowWidth < 871 ? 'relative' : 'absolute',
                        transform: 'scale(1,0)',
                        top: 20
                    }}
                >
                    <StackButtons />
                    <List >
                        {displayedStack.map(item => {
                            return (
                                <ListItem
                                    key={item}
                                    usingDarkMode={usingDarkMode}
                                >
                                    {item}
                                </ListItem>
                            )
                        })}
                    </List>
                </Container>}
        </AnimatePresence >
    )
}

const Container = styled.div<IStack>`

    @media ${breakpoints.default} {
        flex-direction: column !important;
        height: fit-content;
        width: 400px;
    }

    @media screen and (max-width: 405px) {
        width: 300px;
        margin-bottom: -55px;
    }
        
    height: 504px;
    flex-direction: row-reverse;
    display: flex;
    width: 332px;
    justify-content: space-between;
    border: 2px solid ${props => props.usingDarkMode ? 'black' : 'white'};
    background-color: ${props => props.usingDarkMode ? 'white' : 'black'};
    border-radius: 5px;
    margin-top: 4px;
`

const ListItem = styled.li<IStack>`

    @media ${breakpoints.default} {
        margin-top: 5px;
        list-style: disc;
    }

    list-style: none;
    margin-left: 35px;
    color: ${props => props.usingDarkMode ? 'black' : 'white'};
    font-family: 'Raleway', sans-serif;
    font-size: 14pt;
    font-weight: bold;
`

const List = styled.ul<IStack>`

    @media ${breakpoints.default} {
        min-height: 150px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 10px;
        padding-top: 0px;
        padding-left: 0px;
    }

    width: 100%;
    padding-left: 0px;
    padding-top: 20px;
`

export default Test