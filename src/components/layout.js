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


			<div className="w-full lg:w-4/12 px-4 ml-auto text-sm font-semibold">
			    <h3 className="text-4xl font-bold noto">
			    KAKU
			    </h3>
			    <div className="flex">
				<span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/></svg></span>
				<a className="hover:text-gray-900" href="tel:+2347064492879">0706-4492-879</a>
			    </div>
			    <div className="flex">
				<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/></svg></span>
				<a className="hover:text-gray-900" href="mailto:baqi@gmail.com">baqi@gmail.com</a>
			    </div>
			    <p>
			    01 3rd Avenue
			    <br/>
			    Gwarinpa Estate
			    <br/>
			    Abuja Nigeria
			    </p>
			    <div className="w-10 h-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></ div>
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
