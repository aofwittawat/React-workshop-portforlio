import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const StyledSideNav = styled.div`
    background: #333;
`

export const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const StyledLink = styled(NavLink)`
    width: 100%;
    display: inline-block;
    padding: 1rem;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        padding-left: 1rem;
        background: #111;
    }
`

export const StyledLi = styled.li`
    overflow: hidden;
`