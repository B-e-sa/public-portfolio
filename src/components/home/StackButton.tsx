import { useContext } from "react"
import styled, { css } from "styled-components"
import { Context } from "../../context";
import breakpoints from "../../utils/breakpoints";
import stacks from "../../utils/stacks";
import { IStack, ITheme } from "../../types";
stacks

const StackButton = () => {

    const {
        usingDarkMode,
        displayedStack,
        setDisplayedStack,
        windowWidth
    } = useContext(Context);

    return (
        <Buttons usingDarkMode={usingDarkMode} >
            {stacks.map(({ name, icon, stack, shortName }) => {
                return (
                    <Stacks
                        key={name}
                        isShowing={displayedStack === stack}
                        usingDarkMode={usingDarkMode}
                        onClick={() => setDisplayedStack(stack)}
                    >
                        <Title usingDarkMode={usingDarkMode}>{ windowWidth > 481 ? name : shortName }</Title>
                        <Image
                            usingDarkMode={usingDarkMode}
                            src={icon} alt={name}
                            width={50}
                        />
                    </Stacks>
                )
            })}
        </Buttons>
    )
}

const Buttons = styled.div<IStack>`

    @media ${breakpoints.default} {
        border-bottom: 1px solid ${props => props.usingDarkMode ? 'black' : 'white'};
        border-left: 0px;
        flex-direction: row;
    }
            

    display: flex;
    flex-direction: column;
    text-align: center;
    border-left: 1px solid ${props => props.usingDarkMode ? 'black' : 'white'};
`

const Title = styled.p<ITheme>`
    color: ${props => props.usingDarkMode
        ? 'black'
        : 'white'
    };
    font-family: 'Raleway', sans-serif;
`
const Image = styled.img<ITheme>`
    width: 50px;
    filter: ${props => props.usingDarkMode
        ? 'invert(100%)'
        : 'none'
    };
`

const Stacks = styled.div<IStack>`

    @media screen and (max-width: 405px){
        width: 25%;
        height: auto;
    }

    width: 100%;
    height: 25%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    cursor: pointer;

    padding: 10px;

    background-color: ${props =>
        props.isShowing
            ? props.usingDarkMode
                ? '#d3d3d3'
                : '#474747'
            : ''};

    transition: background-color .5s;

    &:hover {
        background-color: ${props => props.usingDarkMode ? "#cecece" : "#666666"};
    }

`

export default StackButton