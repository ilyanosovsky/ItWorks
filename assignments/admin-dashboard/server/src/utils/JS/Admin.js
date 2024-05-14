"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var adminSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
var Admin = mongoose_1.default.model('Admin', adminSchema);
exports.default = Admin;
