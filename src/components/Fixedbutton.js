import React from "react"
import { Link } from "gatsby"
import Speechbubble from '../images/speechbubble.svg'

const Fixedbutton = () => {
  // const blackbutton = document.querySelector('.blackbutton');


  // function pop() {
  //  if (window.scrollY > 890) {
  //   blackbutton.classList.add('scrolled');
  //  } else {
  //   blackbutton.classList.remove('scrolled');
  //  }
  // }

  // window.addEventListener('scroll', pop);

  return (
    <div style={{minWidth:'50px', minHeight:'50px'}} className="blackbutton fixed w-15 h-15 rounded-full bg-black hover:bg-gray-800 bottom-10 right-10 border border-green-500 flex flex-col justify-center items-center focus:outline-none z-10" style={{boxShadow: "0 2px 10px 0 rgba(0,0,0,.63)"}}>
    <Link to="/Contact/"><img src={Speechbubble} alt="talk" className="filterg4 m-5"/></Link>
    </div>
  )
};

export default Fixedbutton;