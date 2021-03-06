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

  Foundation.libs.alert = {
    name : 'alert',

    version : '{{VERSION}}',

    settings : {
      callback: function (){}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = this.S;

      $(this.scope).off('.alert').on('click.fndtn.alert', '[' + this.attr_name() + '] .close', function (e) {
          var alertBox = S(this).closest('[' + self.attr_name() + ']'),
              settings = alertBox.data(self.attr_name(true) + '-init') || self.settings;

        e.preventDefault();
        if (Modernizr.csstransitions) {
          alertBox.addClass("alert-close");
          alertBox.on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {
            S(this).trigger('close').trigger('close.fndtn.alert').remove();
            settings.callback();
          });
        } else {
          alertBox.fadeOut(300, function () {
            S(this).trigger('close').trigger('close.fndtn.alert').remove();
            settings.callback();
          });
        }
      });
    },

    reflow : function () {}
  };
}));
