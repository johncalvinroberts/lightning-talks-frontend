module.exports = {
    "extends": [
        "standard",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "react/prop-types": 0,
        "object-curly-spacing": [2, "always"]
    },
    "globals": {
        "fetch": true,
        "Headers": true,
        "localStorage": true
    }
};