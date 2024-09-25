"use strict";
/// <reference path="crud.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
var newRodID = CRUD.insertRow(row);
var updatedRow = { firstName: "Guillame", lastName: "Salva", age: 23 };
CRUD.updateRow(newRodID, updatedRow);
CRUD.deleteRow(newRodID);
