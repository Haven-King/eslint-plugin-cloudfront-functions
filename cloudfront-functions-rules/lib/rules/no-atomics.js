/**
 * @fileoverview Disallows use of ES8 Atomics.
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
      description: "Disallows use of ES8 Atomics.",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      CallExpression(node) {
        if ("object" in node.callee && node.callee.object.name === "Atomics") {
          context.report({
            node,
            message: "CloudFront Functions do not support ES8 Atomics."
          })
        }
      }
    };
  },
};
