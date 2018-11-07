"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
describe("Viewer", function () {
    it("should not exist", function () {
        chai_1.expect(typeof viewer === "undefined" ? "undefined" : _typeof(viewer)).to.eq("undefined");
    });
    it("should not be referenceable", function () {
        chai_1.expect(function () {
            return viewer;
        }).to.throw(ReferenceError);
    });
});
//# sourceMappingURL=test.js.map