"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("../db/data-source");
const users_module_1 = require("./users/users.module");
const current_user_middleware_1 = require("./utility/middlewares/current-user.middleware");
const config_1 = require("@nestjs/config");
const deposit_money_module_1 = require("./deposit-money/deposit-money.module");
const payment_module_1 = require("./payment/payment.module");
const about_module_1 = require("./about/about.module");
const transaction_history_module_1 = require("./transaction-history/transaction-history.module");
const openai_module_1 = require("./openai/openai.module");
const room_module_1 = require("./room/room.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(current_user_middleware_1.CurrentUserMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOptions),
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot(),
            deposit_money_module_1.DepositMoneyModule,
            payment_module_1.PaymentModule,
            about_module_1.AboutModule,
            transaction_history_module_1.TransactionHistoryModule,
            openai_module_1.OpenaiModule,
            room_module_1.RoomModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map