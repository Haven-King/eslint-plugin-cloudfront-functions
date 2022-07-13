/**
 * @fileoverview Disallows using the 'let' statement.
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
      description: "Disallows using the 'let' statement.",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      VariableDeclaration(node) {
        if (node.kind === "const") {
          context.report({
            node,
            message: "CloudFront Functions do not support the 'const' statement."
          })
        }
      }
    };
  },
};
