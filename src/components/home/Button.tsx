import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import { ITheme } from '../../types';

export interface IButton extends ITheme {
  onclick?: () => any
  image?: string
  angle?: number
  ariaLabel?: string
  style?: any
  as?: any
  width?: number
  height?: number
  radius?: number
  zIndex?: number
}

const Button = ({
  onclick = () => { },
  image,
  angle = 0,
  ariaLabel,
  style,
  as,
  width = 0,
  height,
  radius = 0,
  zIndex = 0
}: IButton) => {

  const { usingDarkMode } = useContext(Context);

  return <Btn
    width={width}
    height={height}
    as={as}
    style={style}
    angle={angle}
    image={image}
    onClick={onclick}
    aria-label={ariaLabel}
    radius={radius}
    zIndex={zIndex}
  />
}

const Btn = styled.button<IButton>`

    transform: rotate(${props => props.angle + 'deg'});

    background-image: ${props => `url(${props.image})`};
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;

    width: ${props => props.width + 'px'};
    height: ${props => props.width + 'px'};

    z-index: ${props => props.zIndex};

    cursor: pointer;

    border-radius: ${props => props.radius};
    border: none;

`

export default Button