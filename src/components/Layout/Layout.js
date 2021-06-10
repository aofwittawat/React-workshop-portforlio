import React from 'react'
import UserHeader from '../UserHeader'
import Sidebar from '../sidebar'
import {Contanier, StyledContent} from './styles'

const Layout = ({ user, children }) => {
    return (
        <>
            <Contanier>
                <Sidebar />
                <StyledContent>
                    <UserHeader user={user} />
                    <div>{children}</div>
                </StyledContent>
            </Contanier>
        </>
    )
}

export default Layout
