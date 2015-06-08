var fs = require('fs');
var path = require('path');

function renderContentWithTag(content, tag, options) {
  var closeTag;
  var attrs = options && options.attrs;
  var openTag = '<' + tag;

  if (content) {
    closeTag = '</' + tag + '>';
  };


  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      openTag += ' ' + attr + '="' + attrs[attr] + '"';
    }
  }

  if (closeTag) {
    openTag += '>';
  } else {
    openTag += '/>';
  }

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
  var tagAttrs;
  var metaTags = this.options.metaTags;
  var isHead = type === 'head'

  if(!isHead){
    return;
  }

  content = '';

  for (var i=0; i<metaTags.length; ++i) {
    tagAttrs = metaTags[i];
    content += renderContentWithTag(undefined, 'meta', { attrs: tagAttrs});
  }

  return content;
};


module.exports = MetaTagRenderer;
