import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Rotate as Hamburger } from 'hamburger-react'



const Header = ({ siteTitle, fixed }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <header>
      <div className="flex flex-wrap">
        <div className="w-full h-12">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg color2 fixed ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link
                  to="/"
                  className="font-bold inline-block mr-4 py-2 whitespace-no-wrap uppercase text-blue"
                >
                  {siteTitle}
                </Link>
                <button
                  className="text-blue cursor-pointer px-3 bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <Hamburger/>
                </button>
              </div>
              
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-0">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue hover:opacity-75"
                      href="#pablo"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
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
        </div>
      </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
