/**
 * @fileoverview Disallows default parameter values.
 * @author Haven King
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-default-parameter-values"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-default-parameter-values", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "function test(a, b = 100) { return b; }",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
