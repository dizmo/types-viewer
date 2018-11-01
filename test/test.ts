import { expect } from "chai";
import { Viewer } from "../lib";
declare const viewer: Viewer;

import "mocha";

describe("Viewer", () => {
    it("should not exist", () => {
        expect(typeof viewer).to.eq("undefined");
    });
    it("should be declareable", () => {
        expect(typeof viewer).to.eq("undefined");
    });
});
