"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectActualCon = void 0;
var store_1 = require("@ngrx/store");
var selectCondominium = function (state) { return state.condominium; };
exports.selectActualCon = store_1.createSelector(selectCondominium, function (state) { return state.actualCon; });
//# sourceMappingURL=condominium.selectors.js.map