import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"





const IndexPage = () => {


  return (
  <Layout>
    <Link to="/page-2/">Go to page 2</Link> 
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
)};

export default IndexPage
