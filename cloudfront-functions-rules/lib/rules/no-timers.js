/**
 * @fileoverview Disallows usage of timers.
 * @author Haven King
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Disallows usage of timers.",
      category: "Fill me in",
      recommended: false,
      url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html#restricted-features", // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const timerFunctions = ["setTimeout", "setImmediate", "clearTimeout"]

    return {
      CallExpression(node) {
        if (timerFunctions.includes(node.callee.name)) {
          context.report({
            node,
            message: "CloudFront Functions do not support timeouts. Your function must synchronously run to completion."
          })
        }
      }
    };
  },
};
