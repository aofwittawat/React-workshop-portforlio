import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Header = styled.div`
    padding: 2rem;
    display: flex;
`

export const Image = styled.img`
    width: 300px;
    margin-right: 1rem;
    border-radius: 5px;
`

export const ViewResumeLink = styled.a`
    display: inline-block;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    align-items: center;
    margin-top: 1rem;
    border: 2px solid #111;
    background-color: #333;
    transition: 0.3s;
    color: #fff;
    border-radius: 5px;
    &:hover {
        boder: 2px solid #111;
        background: transparent;
        color: #333;
    }

    svg {
        position: relative;
        top: 3px;
    }
`