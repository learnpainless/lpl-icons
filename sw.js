importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "icons-actionbar.html",
    "revision": "8f2ca16a3d9f39e02ba5e1fb339995ec"
  },
  {
    "url": "icons-app-shortcut.html",
    "revision": "ff4804f8157699e95efb7c8c4bfd12b7"
  },
  {
    "url": "icons-generic.html",
    "revision": "4c671402066641ce532b30464aaf8e78"
  },
  {
    "url": "icons-launcher.html",
    "revision": "0ba46b1d5705a6c96d28595fae858489"
  },
  {
    "url": "icons-notification.html",
    "revision": "d80dad7f384be02360afae2d391767ec"
  },
  {
    "url": "index.html",
    "revision": "061058a8b9ce84cea907a9ed89eb8a94"
  },
  {
    "url": "nine-patches.html",
    "revision": "da15817eacd5d9420587320e995ac03c"
  },
  {
    "url": "res/generator-thumbs/icon-animator.svg",
    "revision": "65311bbd1a2658cacdf6a2be539b0d9c"
  },
  {
    "url": "res/generator-thumbs/icons-actionbar.svg",
    "revision": "747ac6e1b23e6f00a86d7baebe76029d"
  },
  {
    "url": "res/generator-thumbs/icons-app-shortcut.svg",
    "revision": "dcd36cf4d4b734e4d4d7993aeb5350ce"
  },
  {
    "url": "res/generator-thumbs/icons-generic.svg",
    "revision": "7e9aaa9edeaf210c7afac117cf094192"
  },
  {
    "url": "res/generator-thumbs/icons-launcher.svg",
    "revision": "ac624b8aabda5851413f3ccfd252b80d"
  },
  {
    "url": "res/generator-thumbs/icons-notification.svg",
    "revision": "bd07505811fade5e742afe6a85cedf03"
  },
  {
    "url": "res/generator-thumbs/nine-patches.svg",
    "revision": "c37457a837ee23a6c1981b5d993ee72e"
  },
  {
    "url": "app.js",
    "revision": "eff974d8a9351d943bd9ac23b508db6f"
  },
  {
    "url": "vendor.js",
    "revision": "7b439204b3a5d0a3bdb0b93f8b80e83d"
  },
  {
    "url": "app.css",
    "revision": "dcd56be9e4be6732e723b55fa555acf6"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://(?:fonts|www).(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        purgeOnQuotaError: true,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

