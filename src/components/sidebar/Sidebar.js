import React from 'react'
import { StyledSideNav,StyledUl,StyledLink,StyledLi } from './styles'

const items =[
    { name: 'Me', path: '/'},
    { name: 'Projects', path: '/projects'},
    { name: 'Work', path: '/work'},
    { name: 'Education', path: '/education'}
]

const Sidebar = () => {
    return (
        <StyledSideNav aria-label="Side navigation">
            < StyledUl>
                {items.map( i => (
                    <StyledLi key ={i.name}>
                            <StyledLink
                                to={i.path}
                                exact
                            >
                                {i.name}
                            </StyledLink>
                    </StyledLi>
                ))}
            </StyledUl>
        </StyledSideNav>
    )
}

export default Sidebar
