import React from "react"
import { Link } from "gatsby"
import Speechbubble from '../images/speechbubble.svg'

const Fixedbutton = () => {
  return (
    <div style={{minWidth:'50px', minHeight:'50px'}} className="fixed w-15 h-15 rounded-full bg-black bottom-10 right-10 border border-green-500 flex flex-col justify-center items-center" style={{boxShadow: "0 2px 10px 0 rgba(0,0,0,.63)"}}>
    <Link to="/Contact/"><img src={Speechbubble} alt="talk" className="filterg4 m-5"/></Link>
    </div>
  )
};

export default Fixedbutton;