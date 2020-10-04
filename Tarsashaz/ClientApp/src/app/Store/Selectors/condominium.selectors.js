"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCondominiums = exports.selectConCommonCharge = exports.selectConAddress = exports.selectConFlats = exports.selectConBills = exports.selectConCrId = exports.selectConId = void 0;
var store_1 = require("@ngrx/store");
var selectCondominium = function (state) { return state.condominium; };
exports.selectConId = store_1.createSelector(selectCondominium, function (state) { return state.id; });
exports.selectConCrId = store_1.createSelector(selectCondominium, function (state) { return state.crId; });
exports.selectConBills = store_1.createSelector(selectCondominium, function (state) { return state.bills; });
exports.selectConFlats = store_1.createSelector(selectCondominium, function (state) { return state.flats; });
exports.selectConAddress = store_1.createSelector(selectCondominium, function (state) { return state.address; });
exports.selectConCommonCharge = store_1.createSelector(selectCondominium, function (state) { return state.commonCharge; });
exports.selectCondominiums = store_1.createSelector(selectCondominium, function (state) { return state.condominiums; });
//# sourceMappingURL=condominium.selectors.js.map