module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{json,jpg,html,js,css,md,lock}"
  ],
  "importWorkboxFrom": "local",
  "globIgnores": [
    "node_modules/**/*",
    "workbox-config.js",
    "notes.md",
    'yarn.lock'
  ],
  "swDest": "service-worker.js"
};
