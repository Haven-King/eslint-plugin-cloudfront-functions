/**
 * @fileoverview Disallows usage of the ES6 &#39;for (var x of list) { ... }&#39; statement.
 * @author Haven King
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-for-of"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-for-of", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "for (var x in list) { console.log(x); }",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
