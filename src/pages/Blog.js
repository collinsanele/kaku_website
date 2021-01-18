import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fixedbutton from "../components/Fixedbutton";


const Blog = () => (
  <Layout >
    <SEO title="Blog" />
    <div  className="bgcolor">
      <Fixedbutton/>
      <div className="h-14"></div>
      <h2 className="h-screen">Blog</h2>
    </div>
  </Layout>
);

export default Blog;
