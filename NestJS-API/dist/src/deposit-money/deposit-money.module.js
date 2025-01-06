"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositMoneyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const deposit_money_entity_1 = require("./entities/deposit-money.entity");
const deposit_money_service_1 = require("./deposit-money.service");
const deposit_money_controller_1 = require("./deposit-money.controller");
const users_module_1 = require("../users/users.module");
let DepositMoneyModule = class DepositMoneyModule {
};
exports.DepositMoneyModule = DepositMoneyModule;
exports.DepositMoneyModule = DepositMoneyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([deposit_money_entity_1.DepositMoney]), users_module_1.UsersModule],
        controllers: [deposit_money_controller_1.DepositController],
        providers: [deposit_money_service_1.DepositMoneyService],
        exports: [deposit_money_service_1.DepositMoneyService],
    })
], DepositMoneyModule);
//# sourceMappingURL=deposit-money.module.js.map