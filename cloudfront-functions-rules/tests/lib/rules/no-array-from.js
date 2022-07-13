/**
 * @fileoverview Disallows usage of the &#39;Array.from&#39; method.
 * @author Haven King
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-array-from"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-array-from", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "Array.from(\"ABCDEFG\")",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
