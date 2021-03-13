"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var NotFoundScreen = function (_a) {
    var navigation = _a.navigation;
    return (<react_native_1.View style={styles_1.default.container}>
    <react_native_1.Text style={styles_1.default.title}>This screen doesn't exist.</react_native_1.Text>
    <react_native_1.TouchableOpacity onPress={function () { return navigation.replace("Root"); }} style={styles_1.default.link}>
      <react_native_1.Text style={styles_1.default.linkText}>Go to home screen!</react_native_1.Text>
    </react_native_1.TouchableOpacity>
  </react_native_1.View>);
};
exports.default = NotFoundScreen;
