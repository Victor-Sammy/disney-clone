import React from 'react'
import { Session } from 'next-auth'
import { DropDown, NavMenu, SignOut, UserImg } from '../styles'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

interface Props {
    session: Session 
}


function SignedInHeader({session}: Props) {
  console.log(session)
  const image = session?.user?.image as string;
  const name = session?.user?.name as string;

  const router = useRouter()
  return (
    <>
      <NavMenu>
        <a onClick={()=> router.push({
        pathname: "/",
      })}>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="Search icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="WatchList icon"></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="Originals icon"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="Movie icon"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="Series icon"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        {session !== null ? <UserImg src={image} alt={name} /> : null}
        <DropDown>
          <span onClick={() => signOut()}>SignOut</span>
        </DropDown>
      </SignOut>
    </>
  )
}

export default SignedInHeader