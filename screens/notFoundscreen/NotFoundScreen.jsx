"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("@react-navigation/stack");
var React = require("react");
var react_native_1 = require("react-native");
function NotFoundScreen(_a) {
    var navigation = _a.navigation;
    var navigation1 = stack_1.createStackNavigator();
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Text style={styles.title}>This screen doesn't exist.</react_native_1.Text>
      <react_native_1.TouchableOpacity onPress={function () { return navigation.replace("Root"); }} style={styles.link}>
        <react_native_1.Text style={styles.linkText}>Go to home screen!</react_native_1.Text>
      </react_native_1.TouchableOpacity>
    </react_native_1.View>);
}
exports.default = NotFoundScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    },
    linkText: {
        fontSize: 14,
        color: "#2e78b7"
    }
});
