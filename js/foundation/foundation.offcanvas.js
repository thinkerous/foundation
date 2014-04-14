(function (root, factory) {

  // Set up AMD dependencies
  if (typeof define === 'function' && define.amd) {
    define(['jquery', './foundation'], factory);

  // Set up CommonJS dependencies
  } else if (typeof exports === 'object') {
    var $ = require("jquery");
    var Foundation = require("./foundation");
    module.exports = factory($, Foundation);

  // Set up browser global
  } else {
    factory((root.jQuery || root.$), root.Foundation);
  }
  
}(this, function ($, Foundation) {
  'use strict';

  var jQuery = $;

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.2.2',

    settings : {},

    init : function (scope, method, options) {
      this.events();
    },

    events : function () {
      var self = this,
          S = self.S;

      S(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, 'move-right');
        })
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
          S(".off-canvas-wrap").removeClass("move-right");
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, 'move-left');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
          S(".off-canvas-wrap").removeClass("move-left");
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, 'move-left');
          self.click_remove_class(e, 'move-right');
        })
    },

    click_toggle_class: function(e, class_name) {
      e.preventDefault();
      this.S(e.target).closest('.off-canvas-wrap').toggleClass(class_name);
    },

    click_remove_class: function(e, class_name) {
      e.preventDefault();
      this.S('.off-canvas-wrap').removeClass(class_name);
    },

    reflow : function () {}
  };
}));
