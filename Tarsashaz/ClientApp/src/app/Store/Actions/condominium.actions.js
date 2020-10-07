"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualConChanged = exports.GetCondominiumsSuccess = exports.GetCondominiums = exports.GetCondominiumSuccess = exports.GetCondominium = exports.GetCondominiumByCrId = exports.GET_CONDOMINIUM_BY_CR_ID = exports.ACTUAL_CON_CHANGED = exports.GET_CONDOMINIUMS_SUCCESS = exports.GET_CONDOMINIUMS = exports.GET_CONDOMINIUM_SUCCESS = exports.GET_CONDOMINIUM = void 0;
exports.GET_CONDOMINIUM = '[CONDOMINIUM] Get condominium';
exports.GET_CONDOMINIUM_SUCCESS = '[CONDOMINIUM] Get condominium success';
exports.GET_CONDOMINIUMS = '[CONDOMINIUM] Get condominiums';
exports.GET_CONDOMINIUMS_SUCCESS = '[CONDOMINIUM] Get condominiums success';
exports.ACTUAL_CON_CHANGED = '[CONDOMINIUM] Actual condominium changed';
exports.GET_CONDOMINIUM_BY_CR_ID = '[CONDOMINIUM] Get condominium by common representative id';
var GetCondominiumByCrId = /** @class */ (function () {
    function GetCondominiumByCrId(payload) {
        this.payload = payload;
        this.type = exports.GET_CONDOMINIUM_BY_CR_ID;
    }
    return GetCondominiumByCrId;
}());
exports.GetCondominiumByCrId = GetCondominiumByCrId;
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
var GetCondominiums = /** @class */ (function () {
    function GetCondominiums() {
        this.type = exports.GET_CONDOMINIUMS;
    }
    return GetCondominiums;
}());
exports.GetCondominiums = GetCondominiums;
var GetCondominiumsSuccess = /** @class */ (function () {
    function GetCondominiumsSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_CONDOMINIUMS_SUCCESS;
    }
    return GetCondominiumsSuccess;
}());
exports.GetCondominiumsSuccess = GetCondominiumsSuccess;
var ActualConChanged = /** @class */ (function () {
    function ActualConChanged(payload) {
        this.payload = payload;
        this.type = exports.ACTUAL_CON_CHANGED;
    }
    return ActualConChanged;
}());
exports.ActualConChanged = ActualConChanged;
//# sourceMappingURL=condominium.actions.js.map