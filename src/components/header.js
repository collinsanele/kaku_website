import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Rotate as Hamburger } from 'hamburger-react'



const Header = ({ siteTitle, fixed }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <header className="flex flex-wrap fixed w-full h-12 bg-transparent ">
          <nav className=" flex flex-wrap items-center justify-between px-2 navbar-expand-lg w-full bg-transparent">
            <div className="container px-4 w-full flex flex-wrap items-center justify-between bg-transparent">
              <div className="w-full relative flex justify-between lg:w-auto pr-4 lg:static lg:block lg:justify-start bg-transparent">
                <Link
                  to="/"
                  className="font-bold inline-block mr-4 py-2 whitespace-no-wrap uppercase text-blue bg-transparent pt-3"
                >
                  {siteTitle}
                </Link>
                <button
                  className="text-blue cursor-pointer px-3 bg-transparent block lg:hidden outline-none focus:outline-none relative left-10"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <Hamburger size={16} className="bg-transparent color3"/>
                </button>
              </div>
              
              <div
                className={
                  "lg:flex flex-grow items-center bgcolor" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-0 pt-4 bg-transparent">
                  <li className="nav-item bg-transparent">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      to="/Portfolio/"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item bg-transparent">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item bg-transparent">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item bg-transparent">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item bg-transparent">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
