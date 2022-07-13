/**
 * @fileoverview Disallows default parameter values.
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
      description: "Disallows default parameter values.",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      FunctionDeclaration(node) {
        for (var parameter of node.params) {
          if (parameter.type === "AssignmentPattern") {
            context.report({
              node,
              message: "CloudFront Functions do not support default parameter values."
            });

            // Only warn on the first usage of a default parameter value.
            break;
          }
        }
      }
    };
  },
};
