import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Squeeze as Hamburger } from "hamburger-react"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav class="shadow fixed bgcolor z-30 w-full">
      <div class=" mx-auto py-3 md:flex md:justify-between md:items-center relative">
        <div class="flex justify-between items-center">
          <div class="flex justify-center items-center noto text-2xl ml-4 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
            <Link to="/" class="">
              {siteTitle}
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-black hover:text-gray-900 focus:outline-none focus:text-gray-900 z-50"
              aria-label="toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Hamburger size={32} />
            </button>
          </div>
        </div>

        {/* <!-- normal nav menu --> */}
        <div className="md:flex items-center hidden md:block ">
          <ul className="flex flex-row list-none md:ml-auto ">
            <li>
              <Link
                className="px-3 py-2 flex items-center leading-snug  hover:opacity-75"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 flex items-center leading-snug  hover:opacity-75"
                to="/Pricing/"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 flex items-center leading-snug  hover:opacity-75"
                to="/Contact/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* drop-down menu */}
        <div
          className={
            " flex justify-center absolute inset-0 top-0 right-0 w-full h-screen bgcolor items-center transition transform duration-500 ease-in-out z-30 " +
            (menuOpen
              ? " opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full")
          }
        >
          <div className="flex flex-col justify-center item-center text-center ">
            <ul className="flex flex-col list-none md:ml-auto ">
              <li>
                <Link
                  className="px-3 py-2 flex items-center leading-snug  hover:opacity-75"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-2 flex items-center leading-snug  hover:opacity-75"
                  to="/Pricing/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-2 flex items-center  leading-snug  hover:opacity-75"
                  to="/Contact/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
