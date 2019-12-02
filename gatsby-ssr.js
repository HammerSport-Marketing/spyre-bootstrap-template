/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
 import React from "react";
import { withPrefix} from "gatsby"
import Helmet from "react-helmet"
const jquery = require('../dist/vendor/jquery/dist/jquery.min.js');

export function onRenderBody(
    {setPostBodyComponents}
){
  setPostBodyComponents([
      ]);
}