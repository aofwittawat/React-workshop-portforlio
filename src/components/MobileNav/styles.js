import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: none;
    @media (max-width: 640px) {
        display: block
    }
`
export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100vw;
    top: 0;
    left:0;
    z-index: 1;
`

const activeClassName = 'nav-mobile-active'

export const MobileLink = styled(NavLink).attrs({activeClassName})`
    width: 100%;
    height: 50px;
    display: flex;
    align-items:center;
    justify-content:center;
    background:#333;
    color:#fff;
    &.${activeClassName}{
        background: #111;
    }
`

export const Spacer = styled.div`
    height: 48px
`