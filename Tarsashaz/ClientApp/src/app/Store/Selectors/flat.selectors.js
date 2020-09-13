"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectActualFlat = exports.selectFlats = void 0;
var store_1 = require("@ngrx/store");
var selectFlat = function (state) { return state.flat; };
exports.selectFlats = store_1.createSelector(selectFlat, function (state) { return state.flats; });
exports.selectActualFlat = store_1.createSelector(selectFlat, function (state) { return state.actualFlat; });
//# sourceMappingURL=flat.selectors.js.map