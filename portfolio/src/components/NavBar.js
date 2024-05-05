import React from 'react'
import appIcon from '../assets/Icons/appIcon.png'

const NavBar =()=>{

    return (
        <nav className='w-full'>
            <div className='flex w-full flex-row justify-around'>
            <a href="/" class="" rel="home" aria-current="page"><img width="50" height="50" src={appIcon} alt='anagd' /></a>
            <div className='flex no-wrap gap-2 items-center'>
                <div>
                    Something about Angad
                </div>
                <div className='rounded-lg border-red-600 border-2 px-2 py-1'>
                    Say Hello
                </div>
            </div>
            </div>
        </nav>
    )
}

export default NavBar