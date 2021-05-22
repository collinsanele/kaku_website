import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title='About' />
    <div className='bg-gray-101 flex justify-center items-center h-screen'>
      <div className='h-14'></div>

      <div className='flex flex-col justify-center item-center text-center text-3xl '>
        <ul className='flex flex-col list-none '>
          <li className="hoverLine">
            <Link
              className='px-3 py-2 flex items-center leading-snug  hover:text-purple-874'
              to='/About/'
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default About
