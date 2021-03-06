import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import Listing from "../components/listing"


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ maxWidth: `300px`, margin : `auto`}}>
        <Image />
      </div>
      <div style = {{display : `flex`, flexWrap: `wrap`}}>
        <Listing/>
      </div>

      
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
