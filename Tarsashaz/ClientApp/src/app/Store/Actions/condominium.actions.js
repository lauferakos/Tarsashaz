"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCondominiumSuccess = exports.GetCondominium = exports.GET_CONDOMINIUM_SUCCESS = exports.GET_CONDOMINIUM = void 0;
exports.GET_CONDOMINIUM = '[CONDOMINIUM] Get condominium';
exports.GET_CONDOMINIUM_SUCCESS = '[CONDOMINIUM] Get condominium success';
var GetCondominium = /** @class */ (function () {
    function GetCondominium(payload) {
        this.payload = payload;
        this.type = exports.GET_CONDOMINIUM;
    }
    return GetCondominium;
}());
exports.GetCondominium = GetCondominium;
var GetCondominiumSuccess = /** @class */ (function () {
    function GetCondominiumSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_CONDOMINIUM_SUCCESS;
    }
    return GetCondominiumSuccess;
}());
exports.GetCondominiumSuccess = GetCondominiumSuccess;
//# sourceMappingURL=condominium.actions.js.map