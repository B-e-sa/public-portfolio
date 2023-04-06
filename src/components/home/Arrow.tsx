import { useContext } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/buttons/arrow.webp'
import { Context } from '../../context'
import Button, { IButton } from './Button'

interface IArrow extends IButton {
    direction: string
}

const Arrow = ({
    onclick,
    angle,
    width = 60,
    height = 60,
    style,
    direction
}: IArrow) => {

    const { usingDarkMode } = useContext(Context);

    return (
        <Button as={ArrowBtn}
            width={width}
            height={height}
            image={arrow}
            angle={angle}
            onclick={onclick}
            style={{
                filter: usingDarkMode ? 'invert(1)' : '',
                ...style
            }}
            ariaLabel={direction == 'left' ? 'Go left' : 'Go right'}
        />
    )
}

const ArrowBtn = styled.button`
    
    position: relative;

    &:active {
        filter: invert(50%)
    }

`

export default Arrow