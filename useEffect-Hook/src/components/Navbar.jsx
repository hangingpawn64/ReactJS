import React, {useEffect} from 'react'
import { use } from 'react'

const Navbar = ({color}) => {

    useEffect(() => {
      alert("color was changed")
    }, [color])
    
    return (

        <div>
            I am a navbar of {color} color hehe..
        </div>
    )
}

export default Navbar