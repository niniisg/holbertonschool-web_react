/// <reference path="crud.d.ts"/>

import { RowID, RowElement } from './interface';
let CRUD = require("./crud");

let row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRodID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement =  {firstName: "Guillame", lastName: "Salva", age: 23};


CRUD.updateRow(newRodID, updatedRow);
CRUD.deleteRow(newRodID);