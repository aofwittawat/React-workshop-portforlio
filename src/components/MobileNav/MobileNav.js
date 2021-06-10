import React from 'react'
import { User32, Code32, Portfolio32, Education32 } from '@carbon/icons-react'
import {Container,MobileLink,NavWrapper,Spacer} from './styles'

const MobileNav = () => {
    return (
        <Container>
            <Spacer />
            <NavWrapper>
                <MobileLink to="/" exact>
                    <User32 />
                </MobileLink>
                <MobileLink to="/projects" >
                    <Code32 />
                </MobileLink>
                <MobileLink to="/work" >
                    <Portfolio32 />
                </MobileLink>
                <MobileLink to="/education" >
                    <Education32 />
                </MobileLink>
            </NavWrapper>
        </Container>
    )
}

export default MobileNav
