import React from 'react'
import { useLogingStore } from '../login'

export const About = () => {
    const {loggedIn} = useLogingStore()

  return loggedIn ? <div>About</div> : <div>Ikke about</div>
    
  
}
