"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appReducers = void 0;
var user_reducer_1 = require("./user.reducer");
var flat_reducer_1 = require("./flat.reducer");
exports.appReducers = {
    user: user_reducer_1.userReducers,
    flat: flat_reducer_1.flatReducers
};
//# sourceMappingURL=app.reducer.js.map