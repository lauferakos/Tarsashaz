"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualFlatChangedSuccess = exports.ActualFlatChanged = exports.FlatAddedSuccess = exports.FlatAdded = exports.ACTUAL_FLAT_CHANGED_SUCCESS = exports.ACTUAL_FLAT_CHANGED = exports.FLAT_ADDED_SUCCESS = exports.FLAT_ADDED = void 0;
exports.FLAT_ADDED = '[FLAT] Flat added';
exports.FLAT_ADDED_SUCCESS = '[FLAT] Flat added success';
exports.ACTUAL_FLAT_CHANGED = '[FLAT] Actual flat changed';
exports.ACTUAL_FLAT_CHANGED_SUCCESS = '[FLAT] Actual flat changed success';
var FlatAdded = /** @class */ (function () {
    function FlatAdded(payload) {
        this.payload = payload;
        this.type = exports.FLAT_ADDED;
    }
    return FlatAdded;
}());
exports.FlatAdded = FlatAdded;
var FlatAddedSuccess = /** @class */ (function () {
    function FlatAddedSuccess(payload) {
        this.payload = payload;
        this.type = exports.FLAT_ADDED_SUCCESS;
    }
    return FlatAddedSuccess;
}());
exports.FlatAddedSuccess = FlatAddedSuccess;
var ActualFlatChanged = /** @class */ (function () {
    function ActualFlatChanged(payload) {
        this.payload = payload;
        this.type = exports.ACTUAL_FLAT_CHANGED;
    }
    return ActualFlatChanged;
}());
exports.ActualFlatChanged = ActualFlatChanged;
var ActualFlatChangedSuccess = /** @class */ (function () {
    function ActualFlatChangedSuccess(payload) {
        this.payload = payload;
        this.type = exports.ACTUAL_FLAT_CHANGED_SUCCESS;
    }
    return ActualFlatChangedSuccess;
}());
exports.ActualFlatChangedSuccess = ActualFlatChangedSuccess;
//# sourceMappingURL=flat.actions.js.map