"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectActualFlatBalance = exports.selectActualFlatDatas = exports.selectActualFlat = exports.selectFlats = void 0;
var store_1 = require("@ngrx/store");
var selectFlat = function (state) { return state.flat; };
exports.selectFlats = store_1.createSelector(selectFlat, function (state) { return state.flats; });
exports.selectActualFlat = store_1.createSelector(selectFlat, function (state) { return state.actualFlat; });
exports.selectActualFlatDatas = store_1.createSelector(selectFlat, function (state) { return state.actualFlat.flatDatas; });
exports.selectActualFlatBalance = store_1.createSelector(selectFlat, function (state) { return state.actualFlat.balances; });
//# sourceMappingURL=flat.selectors.js.map