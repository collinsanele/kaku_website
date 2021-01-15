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
import Linkedin from '../images/Linkedin.svg'

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
        <div className="bg-black w-full text-gray-400 -mt-7 pt-7">	
		    <div className="flex flex-wrap w-11/12 lg:w-8/12 mx-auto py-7">


			<div className="w-full lg:w-4/12 px-4 ml-auto text-sm font-semibold">
			    <h3 className="inline text-4xl font-bold noto text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
			    KAKU
			    </h3>
			    <div className="flex">
				<span className="h-6 pr-1"><img src={Phone} alt="Phone:" className="filterg4"/></span>
				<a className="hover:text-white" href="tel:+2347012809187">+234-701-2809-187</a>
			    </div>
			    <div className="flex">
				<span className="h-6 pr-1"><img src={Email} alt="Email:" className="filterg4"/></span>
				<a className="hover:text-white" href="mailto:admin@kaku.com.ng">admin@kaku.com.ng</a>
			    </div>
			    <p className="m-0">
			    3rd Avenue
			    <br/>
			    Gwarinpa Estate
			    <br/>
			    Abuja Nigeria.
			    </p>
			    <p>Digital by <span className="text-gray-500 font-bold hover:text-white">Haze</span></p>
			</div>


			<div className="w-full lg:w-4/12 px-4 ml-auto pb-7">
			    <span className="block noto uppercase text-xl font-bold mb-2">
			    Our Company
			    </span>
			    <ul className="list-unstyled">
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">Home
				</a>
				</li>
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">Blog
				</a>
				</li>
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">Portfolio
				</a>
				</li>
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">Pricing
				</a>
				</li>
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">About Us
				</a>
				</li>
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">Contact us
				</a>
				</li>
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">Privacy policy
				</a>
				</li>
				<li>
				<a className="hover:text-white font-semibold pb-1 text-sm"
				href="#">Accessibility policy
				</a>
				</li>
			    </ul>
			</div>

			<div className="w-full lg:w-4/12 px-4 ml-auto">
			    <span className="block noto uppercase text-xl font-bold mb-2">
			    Our Services
			    </span>
			  	<ul className="list-unstyled">
						<li className="hover:text-white font-semibold pb-1 text-sm">
						Articles and Blogs
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm">
						Advertorials
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm"
						>Web and Email Copies
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm">
						Scripts
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm">
						UX Writing
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm">
						Website Content
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm">
						Advertisement Strategies
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm">
						Media Content
						</li>
						<li className="hover:text-white font-semibold pb-1 text-sm">
						Competition Research
						</li>
			    </ul>
			</div>
		    </div>
		</div>
			<div className="w-full flex align-center justify-center bg-black pb-7"><a href="https://www.linkedIn.com/company/kaku-ng"><img src={Linkedin} alt="Linkedin" className="filterg4"/></a></div>
	  	<div className="w-full flex align-center justify-center bg-black text-xs text-gray-400"><p>Copyright © 2021 KAKU Inc.</p></div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
