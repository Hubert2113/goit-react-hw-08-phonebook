import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
    text-decoration: none;
    color: #000;

    &:not(:first-child){
        margin-left: 20px;
    }

    &:active{
        color: #fff;
    }
`;