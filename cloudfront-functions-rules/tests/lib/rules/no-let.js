/**
 * @fileoverview Disallows using the &#39;let&#39; statement.
 * @author Haven King
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-let"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-let", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "let x = 10;",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
