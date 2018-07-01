import styled from 'react-emotion';
import {Link} from 'react-router-dom';


const NavRouterLink = styled(Link)`
    color: inherit;
    background-color: transparent;
    font-size: 14px;
    font-weight: 700;
    padding: 8px;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    align-self: stretch;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
`;

export default NavRouterLink;