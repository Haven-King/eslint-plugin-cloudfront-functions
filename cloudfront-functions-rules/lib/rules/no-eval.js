/**
 * @fileoverview Disallows eval.
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
      description: "Disallows eval.",
      category: "Fill me in",
      recommended: false,
      url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html#restricted-features", // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === "eval") {
          context.report({
            node,
            message: "CloudFront Functions do not support dynamic code evaluation."
          })
        }
      }
    };
  },
};
