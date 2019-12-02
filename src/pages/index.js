import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Main page sections
import * as S from "../components/indexSections"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
     <div className="preloader">
      <div className="spinner">
          <div className="circles"></div>
      </div>
    </div> 
    <main className="main minh-100vh">
              <S.SectionA />

              <S.SectionB />

              <S.SectionC />

              <S.SectionD />
    </main>
  </Layout>
)

export default IndexPage
