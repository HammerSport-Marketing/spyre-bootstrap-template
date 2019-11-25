import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Main page sections
import * as S from "../components/indexSections"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div class="preloader">
      <div class="spinner">
          <div class="circles"></div>
      </div>
    </div> */}
    <main className="main minh-100vh">
              <S.SectionA />

              <S.SectionB />

              <S.SectionC />

              <S.SectionD />
    </main>
  </Layout>
)

export default IndexPage
