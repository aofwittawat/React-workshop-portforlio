/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight16 } from '@carbon/icons-react'

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles'

const UserHeader = ({ user }) => {


    const location = useLocation()

    return (
        <HeaderContainer>
           <Header>
               <Image src={user.basics.picture}/>
               <div>
                   <h2>{user.basics.name}</h2>
                   <h4>
                       <a 
                            href={`https://gitconnected.com/${user.basics.username}`}
                            target="_blank"
                            rel = "noreferrer nopenner"
                        >
                            @{user.basics.username}
                        </a>
                   </h4>
               </div>
           </Header>
        </HeaderContainer>
    )
}

export default UserHeader
