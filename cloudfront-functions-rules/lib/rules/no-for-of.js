/**
 * @fileoverview Disallows usage of the ES6 'for (var x of list) { ... }' statement.
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
      description: "Disallows usage of the ES6 'for (var x of list) { ... }' statement.",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ForOfStatement(node) {
        context.report({
          node,
          message: "CloudFront Functions do not support for/of loops."
        })
      }
    };
  },
};
