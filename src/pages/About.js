import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
  <Layout >
    <SEO title="About" />
    <div  className="bgcolor">
      <div className="h-14"></div>
      <h2 className="h-screen">About</h2>
    </div>
  </Layout>
);

export default About;
