# ember-cli-static-meta-tags

An ember-cli add-on to render static meta-tags into your index.html file.

## Install
```
npm install --save-dev ember-cli-static-meta-tags
```
*compatible with ember-cli >= v0.0.47*

## Usage

In your app's **Brocfile.js**, define metaTags options on your app instance

```js
var app = new EmberApp({
  metaTags: [
    {
     "name":"description",
     "content":"Ember CLI meta tags!"
    }
    ...
  ]
});
```




