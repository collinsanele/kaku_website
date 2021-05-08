import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'

import logo from '../images/kaku-logo-purple.png'

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='shadow fixed bgcolor z-30 w-full'>
      <div className=' mx-auto py-3 md:flex md:justify-between md:items-center relative'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center relative'>
            <Link className='opacity-0 ' to='/'>{siteTitle}</Link>
            <Link className='absolute w-24 ml-20' to='/'><img src={logo} alt='logo'/></Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-black hover:text-gray-900 focus:outline-none focus:text-purple-874 z-50'
              aria-label='toggle menu'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Hamburger size={32} />
            </button>
          </div>
        </div>

        {/* <!-- normal nav menu --> */}
        <div className='md:flex items-center hidden md:block '>
          <ul className='flex flex-row list-none md:ml-auto '>
            <li>
              <Link
                className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                to='/About/'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                to='/Portfolio/'
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                to='/Pricing/'
              >
                Pricing & Plans
              </Link>
            </li>
            <li>
              <Link
                className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                to='/Contact/'
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                to='/Blog/'
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* drop-down menu */}
        <div
          className={
            ' flex justify-center absolute inset-0 top-0 right-0 w-full h-screen bgcolor items-center transition transform duration-500 ease-in-out z-30 ' +
            (menuOpen
              ? ' opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full')
          }
        >
          <div className='flex flex-col justify-center item-center text-center '>
            <ul className='flex flex-col list-none md:ml-auto '>
              <li>
                <Link
                  className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                  to='/About/'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                  to='/Portfolio/'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                  to='/Pricing/'
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                  to='/Contact/'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
                  to='/Blog/'
                >
                  Blog
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
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
