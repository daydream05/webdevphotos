import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroBasic } from "../components/hero-basic"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBasic />
  </Layout>
)

export default IndexPage
