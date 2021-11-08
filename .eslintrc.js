module.exports = {
    extends: ["taro/react"],
    rules: {
        "indent": ["error", 4],
        "no-mixed-spaces-and-tabs": "off",
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-indent-props": [2, 2],
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-empty-function": 0,
        "react/display-name": 0,
        "react/prop-types": 0
    },
};
