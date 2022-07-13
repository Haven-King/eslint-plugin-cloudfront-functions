/**
 * @fileoverview Restrict usage of &#39;require&#39; to CloudFront Functions provided modules.
 * @author Haven King
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/restrict-require"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("restrict-require", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "require('request')",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
