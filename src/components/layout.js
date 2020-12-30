/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "fontsource-roboto"
import "fontsource-open-sans"
import "fontsource-noto-sans-jp"
import Phone from '../images/Phone.svg'
import Email from '../images/Email.svg'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div >
        <main>{children}</main>
        <footer >
          <div className="bg-black w-full text-gray-400 -mt-7">	
		    <div className="flex flex-wrap w-8/12 mx-auto pt-7">


			<div className="w-full lg:w-4/12 px-4 ml-auto text-sm font-semibold">
			    <h3 className="text-4xl font-bold noto">
			    KAKU
			    </h3>
			    <div className="flex">
				<span><img src={Phone} alt="Phone:" className="filterg4"/></span>
				<a className="hover:text-gray-900" href="tel:+2347064492879">0706-4492-879</a>
			    </div>
			    <div className="flex">
				<span><img src={Email} alt="Email:" className="filterg4"/></span>
				<a className="hover:text-gray-900" href="mailto:baqi@gmail.com">baqi@gmail.com</a>
			    </div>
			    <p className="m-0">
			    01 3rd Avenue
			    <br/>
			    Gwarinpa Estate
			    <br/>
			    Abuja Nigeria
			    </p>
			    <p>Digital by <span className="text-gray-600 hover:text-gray-900">Haze</span></p>
			</div>


			<div className="w-full lg:w-4/12 px-4 ml-auto">
			    <span className="block uppercase text-lg font-bold mb-2">
			    Our Company
			    </span>
			    <ul className="list-unstyled">
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Home
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Blog
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Portfolio
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Pricing
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">About Us
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Contact us
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Privacy policy
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Accessibility policy
				</a>
				</li>
			    </ul>
			</div>

			<div className="w-full lg:w-4/12 px-4 ml-auto">
			    <span className="block uppercase text-lg font-bold mb-2">
			    Our Services
			    </span>
			    <ul className="list-unstyled">
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Articles and Blogs
				</a>
				</li>
				<li>
				<a className=" hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Advertorials
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Web and Email Copies
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Scripts
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">UX Writing
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Website Content
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Advertisement Strategies
				</a>
				</li>
				<li>
				<a className="hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Media Content
				</a>
				</li>
				<li>
				<a className=" hover:text-gray-900 font-semibold pb-1 text-sm"
				href="#">Competition Research
				</a>
				</li>
			    </ul>
			</div>


		    </div>
		</div>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
