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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("./entities/payment.entity");
const users_service_1 = require("../users/users.service");
let PaymentService = class PaymentService {
    constructor(paymentRepository, usersService) {
        this.paymentRepository = paymentRepository;
        this.usersService = usersService;
    }
    async payment(email, amount, method, trxId) {
        const user = await this.usersService.findUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.accountBalance < amount) {
            throw new Error('Insufficient balance');
        }
        user.accountBalance -= amount;
        const payment = new payment_entity_1.Payment();
        payment.email = email;
        payment.amount = amount;
        payment.method = method;
        payment.trxId = trxId;
        await Promise.all([
            this.paymentRepository.save(payment),
            this.usersService.updateUserAccountBalancePayment(email, user.accountBalance),
        ]);
        return payment;
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map