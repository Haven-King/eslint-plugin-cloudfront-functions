/**
 * @fileoverview Disallows the use of the Function constructor.
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
      description: "Disallows the use of the Function constructor.",
      category: "Fill me in",
      recommended: false,
      url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html#restricted-features", // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      NewExpression(node) {
        if (node.callee.name === "Function") {
          context.report({
            node,
            message: "CloudFront Functions do not support dynamic code evaluation."
          })
        }
      }
    };
  },
};
