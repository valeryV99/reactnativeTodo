"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSampleList = exports.updateSampleList = void 0;
var action_1 = require("./action");
exports.updateSampleList = action_1.createAction("app/sample/updateList");
exports.fetchSampleList = action_1.createAction("app/sample/fetchList");
