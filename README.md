# Vue.js Unity Asset Viewer

A web app that displays a list of Unity packages in a searchable interface.

The app itself stores no information by itself, and the list of packages displayed is loaded from an external manifest file.

Typical information on a single package in the manifest would include its name, a url to its store page on the Unity asset store (if one exists), and urls for downloads of different versions.

The site along with a manifest's contents can be linked to directly by embedding the manifest path in the site url.

`https://my-site/?src=<url-encoded-path-to-my-file>`

*Note: This app is intended as a tool for conveniently sharing package downloads between team members in an organization. It assumes that if a manifest linked to contains download urls to packages, the manner in which these were obtained comply with Unity's purchase policies.*

## Manifest Schema

Todo: description of manifest schema and required properties.

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Deployment


``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
After running the above commands, copy the contents of the `dist` folder to where the app will be hosted and it should be good to go.

The app assumes it will be served from a domain's root path, and isn't expected to work otherwise.

Example: 

``` bash
# Fine
mysite.com/

# Invalid
mysite.com/my-app
```

Further information on development/deployment: [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
