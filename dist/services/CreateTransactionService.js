"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        if (type === "outcome") {
            var balance = this.transactionsRepository.getBalance();
            if (balance.total < value) {
                throw new Error("Não é possivel realizar a retirada de valor maior que o disponivel.");
            }
        }
        var transaction = this.transactionsRepository.create({
            title: title, value: value, type: type
        });
        return transaction;
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
