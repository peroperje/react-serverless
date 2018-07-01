import styled from 'react-emotion'
import {space,color} from 'styled-system'

const ButtonTransparent = styled('button')`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.1428571428571428;
    border-radius: 4px;
    border: 0;
    font-family: inherit;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    appearance: none;
    background-color: transparent;
    ${space}
    ${color}
`

export default ButtonTransparent