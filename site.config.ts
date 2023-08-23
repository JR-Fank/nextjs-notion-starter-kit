import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '73068d2267ed44eb9d6718062191a05c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'JR-Fank', 
  domain: 'jrfank.cc', 
  author: 'JR-Fank',    

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site', 

  // social usernames (optional) 
  twitter: 'JRFank8888', 
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  zhihu: 'jrfank_bot', // optional newsletter URL 
  youtube: 'channel/UCWmPktodw6BZuRbiW6FsvPQ', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX` 

  // default notion icon and cover images for site-wide consistency (optional) 
  // page-specific values will override these site-wide defaults 
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
     navigationStyle: 'custom',
     navigationLinks: [
       {
         title: 'About',
         pageId: '8d1ad2ffb2da43c98d972167966ad9a1'
       },
       {
         title: 'Contact',
         pageId: '0059400ae11649a68b9862475bd8d8c7'
       }
     ]
})
