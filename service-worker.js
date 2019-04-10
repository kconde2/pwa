/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.2.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.2.0"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "data/spacex.json",
    "revision": "2150fc7de9da187b7b557ec2e32a8ed6"
  },
  {
    "url": "images/24381830217_a205e54860_z.jpg",
    "revision": "cc1eb1d0f89ca7900ee07b3ddf50a6b3"
  },
  {
    "url": "images/25377628288_85007e8855_z.jpg",
    "revision": "d958a45b8c40419e568a9988e4ad1e41"
  },
  {
    "url": "images/38583830575_3f0f7215e6_z.jpg",
    "revision": "f0d7e047ef6e08b2cb039477e050c004"
  },
  {
    "url": "images/39244105581_d70e6c02bf_z.jpg",
    "revision": "c569756b2568a5cc7e4f0bdd72cd9f1b"
  },
  {
    "url": "images/39556548902_d174084ba7_z.jpg",
    "revision": "c377b45b1bfc4cc6b5fe9b40b0e195e9"
  },
  {
    "url": "images/39556549372_f74db4b3f2_z.jpg",
    "revision": "4f2c9651e0c9c76f0f3d85f08db42cc6"
  },
  {
    "url": "images/39557026242_d36a4ffd3f_z.jpg",
    "revision": "82543560d2e0d5631d3da6e15455f6f1"
  },
  {
    "url": "images/39585575631_67ecc76b5d_z.jpg",
    "revision": "ab3ff12b06c89ece89dcccbbf4c2e56b"
  },
  {
    "url": "index.html",
    "revision": "d6d97c5ed747117d1d8c787ac00c0631"
  },
  {
    "url": "js/app.js",
    "revision": "4173f2ea96ce61e2154411733e620dd7"
  },
  {
    "url": "js/components/card/card.css",
    "revision": "b03c1da829f0d2a547c180867fb67c47"
  },
  {
    "url": "js/components/card/card.js",
    "revision": "f1fc05b38fd7c03081887fdc3a0d427a"
  },
  {
    "url": "package.json",
    "revision": "99a6011ee57eb34af85ba07f91e206ff"
  },
  {
    "url": "styles/main.css",
    "revision": "bc67d9052d6441ba583711ffd896e84b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
