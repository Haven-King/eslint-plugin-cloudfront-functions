/**
 * @fileoverview Reminder that CloudFront Functions run in strict mode by default.
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
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Reminder that CloudFront Functions run in strict mode by default.",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ExpressionStatement(node) {
        if (node.expression.type === "Literal" && node.expression.value === "use strict") {
          context.report({
            node,
            message: "CloudFront Functions operate in strict mode by default. This cannot be changed."
          })
        }
      }
    };
  },
};
