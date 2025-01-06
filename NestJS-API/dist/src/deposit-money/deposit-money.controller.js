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
exports.DepositController = void 0;
const common_1 = require("@nestjs/common");
const deposit_money_service_1 = require("./deposit-money.service");
const user_entity_1 = require("../users/entities/user.entity");
const current_user_decorator_1 = require("../utility/decorators/current-user.decorator");
let DepositController = class DepositController {
    constructor(depositService) {
        this.depositService = depositService;
    }
    async deposit(body, currentUser) {
        const { amount, method, trxId } = body;
        const allowedMethods = ['bKash', 'Nagad', 'Bank account'];
        if (method && !allowedMethods.includes(method)) {
            throw new common_1.BadRequestException('Wrong method selected');
        }
        try {
            const deposit = await this.depositService.deposit(currentUser.email, amount, method, trxId);
            return { message: 'Deposit successful', deposit };
        }
        catch (error) {
            return { error: error.message };
        }
    }
};
exports.DepositController = DepositController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], DepositController.prototype, "deposit", null);
exports.DepositController = DepositController = __decorate([
    (0, common_1.Controller)('deposits'),
    __metadata("design:paramtypes", [deposit_money_service_1.DepositMoneyService])
], DepositController);
//# sourceMappingURL=deposit-money.controller.js.map