/**
 * @fileoverview Disallows the use of the Function constructor.
 * @author Haven King
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-new-function"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-new-function", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "const sum = new Function('a', 'b', 'return a + b')",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
