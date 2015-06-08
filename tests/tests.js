var MetaTagRenderer = require('../index.js');
var fs = require('fs');
var path = require('path');

var defaultProject = {
  root: './'
};

var defaultApp = {
  options: {
    minifyJS: {},
    minifyCSS: {}
  }
};

test('can create renderer', function() {
  var renderer = new MetaTagRenderer();
  ok( renderer );
  ok( renderer instanceof MetaTagRenderer );
});

test('can render meta tag', function() {
  var renderer = new MetaTagRenderer(defaultProject);
  var app = Object.create(defaultApp);
  app.options.metaTags = [
    {
      property: 'og:image',
      content: 'testtest'
    }
  ];

  renderer.included(app);
  var content = renderer.contentFor('head').trim();


  equal( content, '<meta property="og:image" content="testtest"/>' );
});
