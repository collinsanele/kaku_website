import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Blog = () => (
  <Layout >
    <SEO title="Blog" />
    <div  className="bg-gray-101">
      <div className="h-14"></div>
      <h2 className="h-screen">Blog</h2>
    </div>
  </Layout>
);

export default Blog;
