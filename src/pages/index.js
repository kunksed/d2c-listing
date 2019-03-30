import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import Listing from "../components/listing"


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p> Brands for you!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, alignContent : 'center' }}>
        <Image />
      </div>
      <Listing />
      
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
