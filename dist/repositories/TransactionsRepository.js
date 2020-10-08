"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("../models/Transaction"));
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
        /*
        this.transactions = [ {
          id: '9728d1fd-4c8d-4d7a-9531-0c34192e98fe',
          title: 'Loan',
          value: 1200,
          type: 'income'
        },
         {
          id: '1161913d-36c8-47b1-8b5e-7ce8b5084fd4',
          title: 'Salary',
          value: 3000,
          type: 'income'
        },
         {
          id: '0c18ab95-c2b5-46ba-8631-1070466ae9f2',
          title: 'Bicycle',
          value: 1500,
          type: 'outcome'
        }];*/
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        var lsTransactions = __spreadArrays(this.transactions);
        var balance = this.transactions.reduce(function (accumulator, transaction) {
            if (transaction.type === 'income') {
                accumulator.income += transaction.value;
            }
            else if (transaction.type === 'outcome') {
                accumulator.outcome += transaction.value;
            }
            accumulator.total = accumulator.income - accumulator.outcome;
            return accumulator;
        }, {
            income: 0,
            outcome: 0,
            total: 0
        });
        return balance;
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        var transaction = new Transaction_1.default({
            title: title, value: value, type: type
        });
        this.transactions.push(transaction);
        return transaction;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
