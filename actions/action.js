"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAction = void 0;
function createAction(type) {
    var action = (function (payload) {
        return { type: type, payload: payload };
    });
    action.type = type;
    return action;
}
exports.createAction = createAction;
