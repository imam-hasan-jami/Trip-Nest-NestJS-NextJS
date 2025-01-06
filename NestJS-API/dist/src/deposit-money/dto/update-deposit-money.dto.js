"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepositMoneyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_deposit_money_dto_1 = require("./create-deposit-money.dto");
class UpdateDepositMoneyDto extends (0, mapped_types_1.PartialType)(create_deposit_money_dto_1.CreateDepositMoneyDto) {
}
exports.UpdateDepositMoneyDto = UpdateDepositMoneyDto;
//# sourceMappingURL=update-deposit-money.dto.js.map