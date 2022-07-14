# eslint-plugin-cloudfront-functions

A collection of ESLint rules for developing Amazon CloudFront Functions

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-cloudfront-functions`:

*Note: Not yet published to NPM.*
```sh
npm install eslint-plugin-cloudfront-functions --save-dev
```

## Usage

Add `cloudfront-functions` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cloudfront-functions"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cloudfront-functions/rule-name": 2
    }
}
```

## Supported Rules

| Rule Name | Description |
| -- | -- |
| `cloudfront-functions/no-array-from` | Disallows usage of the 'Array.from' method. |
| `cloudfront-functions/no-atomics` | Disallows use of ES8 Atomics. |
| `cloudfront-functions/no-class-declaration` | Disallows class declarations. |
| `cloudfront-functions/no-const` | Disallows using the 'const' statement. |
| `cloudfront-functions/no-default-parameter-values` | Disallows default parameter values. |
| `cloudfront-functions/no-eval` | Disallows eval. |
| `cloudfront-functions/no-for-of` | Disallows usage of the ES6 'for (var x of list) { ... }' statement. |
| `cloudfront-functions/no-import` | Disallows import statements. |
| `cloudfront-functions/no-let` | Disallows using the 'let' statement. |
| `cloudfront-functions/no-new-function` | Disallows the use of the Function constructor. |
| `cloudfront-functions/no-new-maps` | Disallows Map creation. |
| `cloudfront-functions/no-new-promises` | Disallows Promise creation. |
| `cloudfront-functions/no-new-sets` | Disallows Set creation. |
| `cloudfront-functions/no-new-shared-array-buffer` | Disallows creation of ES8's SharedArrayBuffer. |
| `cloudfront-functions/no-new-symbols` | Disallows Symbol creation. |
| `cloudfront-functions/no-timers` | Disallows usage of timers. |
| `cloudfront-functions/no-use-strict` | Reminder that CloudFront Functions run in strict mode by default. |
| `cloudfront-functions/restrict-require` | Restrict usage of 'require' to CloudFront Functions provided modules. |