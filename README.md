# gatsby-website
Personal Website

Development:
```npm run develop```
Activate the server and serve the static html page

Deployment:

    "deploy": "gatsby build --prefix-paths && gh-pages -d public",
     * this should have forked everything to the ghpages branch and have it serve but there's a bunch of missing styling. 
    "deploy:gh": "npm run build && node ./scripts/deploy-gh.js"
      * this one uses a github script to accomplish the same task but it does not seem to create a public folder when used.
    "deploy:gh-noprefix": "gatsby build && gh-pages -d public -b master"
      * this one requires the gatsby config to removed the prefixed ```pathPrefix: "/gatsby-website"```
      * This one does not work either

    ## Surge --works pretty well.
    * na-west1.surge.sh on my namechap domain, @ [host] and www[host] (CNAME)
    * npm run build
    * surge public/
    * enter in your custom domain
      * Or use the command to default it to a CNAME file. 
