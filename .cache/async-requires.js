// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/Users/ykmmui/Desktop/code/learn-silo/gatsby-tutorial/hello-world/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-skills-page-js": () => import("/Users/ykmmui/Desktop/code/learn-silo/gatsby-tutorial/hello-world/src/pages/SkillsPage.js" /* webpackChunkName: "component---src-pages-skills-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ykmmui/Desktop/code/learn-silo/gatsby-tutorial/hello-world/.cache/data.json")

