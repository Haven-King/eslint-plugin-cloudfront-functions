/**
 * @fileoverview Restrict usage of 'require' to CloudFront Functions provided modules.
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
      description: "Restrict usage of 'require' to CloudFront Functions provided modules.",
      category: "Fill me in",
      recommended: false,
      url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html#writing-functions-javascript-features-builtin-modules", // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const providedModules = ["crypto", "querystring"];

    return {
      CallExpression(node) {
        if (node.callee.name === "require" && !providedModules.includes(node.arguments[0].value)) {
          context.report({
            node,
            message: "CloudFront Functions do not provide module '" + node.arguments[0].value + "'."
          })
        }
      }
    };
  },
};
