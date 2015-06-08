var fs = require('fs');
var path = require('path');

function renderContentWithTag(content, tag, options) {
  var attrs = options && options.attrs;
  var openTag = '<' + tag;
  var closeTag = '</' + tag + '>';

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      openTag += ' ' + attr + '="' + attrs[attr] + '"';
    }
  }
  openTag += '>';
  return [openTag, content, closeTag].join('\n');
}

function MetaTagRenderer(project) {
  this.name = 'ember-cli-meta-tags';
  this.project = project;
}

MetaTagRenderer.prototype.included = function(app) {
  this.options = app.options || {};
};

MetaTagRenderer.prototype.contentFor = function(type, config) {
  var metaTags = this.options.metaTags;
  var isHead = type === 'head'

  if(!isHead){
    return;
  }

  content = '';

  for (var attrs in metaTags) {
    content += renderContentWithTag(undefined, 'meta', { attr: attrs});
  }

  return content;
};


module.exports = MetaTagRenderer;
