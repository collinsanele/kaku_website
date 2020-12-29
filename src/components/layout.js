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


			<div className="w-full lg:w-4/12 px-4 ml-auto">
			    <h3 className="text-4xl font-bold">
			    KAKU
			    </h3>
			    <div className="flex">
				<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg></span>
				<a className="hover:text-gray-900" href="tel:+2347064492879">0706-4492-879</a>
			    </div>
			    <div className="flex">
				<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg></span>
				<a className="hover:text-gray-900" href="mailto:baqi@gmail.com">baqi@gmail.com</a>
			    </div>
			    <p>
			    01 3rd Avenue
			    <br/>
			    Gwarinpa Estate
			    <br/>
			    Abuja Nigeria
			    </p>
			    <span className="w-10 h-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></span>
			    <p>Digital by <span className="text-gray-600 hover:text-gray-900">Haze</span></p>
			</div>


			<div className="w-full lg:w-4/12 px-4 ml-auto">
			    <span className="block uppercase text-sm font-semibold mb-2">
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
			    <span className="block uppercase text-sm font-semibold mb-2">
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
