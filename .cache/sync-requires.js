const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ykmmui/Desktop/code/learn-silo/gatsby-tutorial/hello-world/src/pages/index.js"))),
  "component---src-pages-skills-page-js": hot(preferDefault(require("/Users/ykmmui/Desktop/code/learn-silo/gatsby-tutorial/hello-world/src/pages/SkillsPage.js")))
}

