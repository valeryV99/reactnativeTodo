"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonoText = void 0;
var React = require("react");
var Themed_1 = require("./Themed");
function MonoText(props) {
    return <Themed_1.Text {...props} style={[props.style, { fontFamily: "space-mono" }]}/>;
}
exports.MonoText = MonoText;
