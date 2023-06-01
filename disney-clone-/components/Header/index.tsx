import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import { Login, LoginContainer, Logo, Nav } from './styles'
import SignedInHeader from './SignedInHeader'
import { useRouter } from 'next/router'


function Header() {
    const { data: session, status } = useSession()

    const router = useRouter()

    const renderHeader =()=> {
        if (session) return (
            <SignedInHeader session={session}/>
        )
        return (
            <LoginContainer>
                <Login onClick={() => signIn()}>
                    Login
                </Login>
            </LoginContainer>
        )
    }
  return (
    <Nav>
        <Logo onClick={()=> router.push({
        pathname: "/",
      })} src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="Disney Logo" />
        {renderHeader()}
    </Nav>
  )
}

export default Header