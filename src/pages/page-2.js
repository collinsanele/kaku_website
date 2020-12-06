import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div className="w-full bg-pink-100  lg:w-4/12 px-4 lg:order-1">
      <div className="flex justify-center py-4 lg:pt-4 pt-8">
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            22
          </span>
          <span className="text-sm text-gray-500">Friends</span>
        </div>
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            10
          </span>
          <span className="text-sm text-gray-500">Photos</span>
        </div>
        <div className="lg:mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            89
          </span>
          <span className="text-sm text-gray-500">Comments</span>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
