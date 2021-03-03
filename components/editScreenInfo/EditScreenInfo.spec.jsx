"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var EditScreenInfo_1 = require("./EditScreenInfo");
describe("<EditScreenInfo />", function () {
    it("rendered", function () {
        var editScreenInfo = react_test_renderer_1.create(<EditScreenInfo_1.default path="test"/>);
        expect(editScreenInfo);
    });
});
