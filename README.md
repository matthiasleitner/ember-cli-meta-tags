# ember-cli-inline-content [![Build Status](https://travis-ci.org/gdub22/ember-cli-inline-content.svg?branch=master)](https://travis-ci.org/gdub22/ember-cli-inline-content)

An ember-cli add-on to render static meta-tags into your index.html file.

## Install
```
npm install --save-dev ember-cli-meta-tags
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




