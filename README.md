# eslint-plugin-cloudfront-functions

A collection of ESLint rules for developing Amazon CloudFront Functions

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-cloudfront-functions`:

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

* Fill in provided rules here


