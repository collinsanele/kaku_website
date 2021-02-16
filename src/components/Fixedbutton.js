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
    <div className="blackbutton fixed w-15 h-15 rounded bg-black transition transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bottom-5 right-5 border border-green-500 flex flex-col justify-center items-center focus:outline-none z-10" style={{boxShadow: "0 2px 10px 0 rgba(0,0,0,.63)"}}>
         <Link to="/Contact/">
             <img src={Speechbubble} alt="talk" className="filterg4 m-5"/>
         </Link>
    </div>
  )
};

export default Fixedbutton;
