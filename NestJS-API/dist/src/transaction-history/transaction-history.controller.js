"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryController = void 0;
const common_1 = require("@nestjs/common");
const authentication_guard_1 = require("../utility/guards/authentication.guard");
const transaction_history_service_1 = require("./transaction-history.service");
const current_user_decorator_1 = require("../utility/decorators/current-user.decorator");
const user_roles_enum_1 = require("../utility/common/user-roles.enum");
const authorize_roles_decorator_1 = require("../utility/decorators/authorize-roles.decorator");
const authorization_guard_1 = require("../utility/guards/authorization.guard");
let TransactionHistoryController = class TransactionHistoryController {
    constructor(transactionHistoryService) {
        this.transactionHistoryService = transactionHistoryService;
    }
    async getUserTransactionHistory(currentUser) {
        const userEmail = currentUser.email;
        return this.transactionHistoryService.getUserTransactionHistory(userEmail);
    }
    async getAllTransactionHistory() {
        return this.transactionHistoryService.getAllTransactionHistory();
    }
    async searchTransactionHistory({ email }) {
        return this.transactionHistoryService.searchTransactionHistory(email);
    }
};
exports.TransactionHistoryController = TransactionHistoryController;
__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionHistoryController.prototype, "getUserTransactionHistory", null);
__decorate([
    (0, authorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizeGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionHistoryController.prototype, "getAllTransactionHistory", null);
__decorate([
    (0, authorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizeGuard),
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionHistoryController.prototype, "searchTransactionHistory", null);
exports.TransactionHistoryController = TransactionHistoryController = __decorate([
    (0, common_1.Controller)('transaction-history'),
    __metadata("design:paramtypes", [transaction_history_service_1.TransactionHistoryService])
], TransactionHistoryController);
//# sourceMappingURL=transaction-history.controller.js.map