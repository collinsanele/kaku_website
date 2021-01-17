import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Squeeze as Hamburger } from 'hamburger-react'



const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <header className="flex flex-wrap w-full h-14 bgcolor">
          <nav className=" flex flex-wrap items-center justify-between px-2 navbar-expand-lg w-full">
            <div className="px-4 w-full flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto pr-4 lg:static lg:block lg:justify-start">
                <Link
                  to="/"
                  className="font-bold inline-block mr-4 py-2 whitespace-no-wrap uppercase text-blue pt-3"
                >
                  {siteTitle}
                </Link>
                <button
                  className="text-blue cursor-pointer px-3 block lg:hidden outline-none focus:outline-none relative left-10"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <Hamburger rounded size={16}/>
                </button>
              </div>
              
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex bgcolor z-50 shadow" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-0 pt-4">
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      to="/Portfolio/"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      to="/Pricing/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      to="/Blog/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      to="/About/"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      to="/Contact/"
                    >
                      Contact
                    </Link>
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
