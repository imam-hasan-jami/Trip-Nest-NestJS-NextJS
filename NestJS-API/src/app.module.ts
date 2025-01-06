import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { CurrentUserMiddleware } from './utility/middlewares/current-user.middleware';
import { ConfigModule } from '@nestjs/config';
import { DepositMoneyModule } from './deposit-money/deposit-money.module';
import { PaymentModule } from './payment/payment.module';
import { AboutModule } from './about/about.module';
import { TransactionHistoryModule } from './transaction-history/transaction-history.module';
import { OpenaiModule } from './openai/openai.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    ConfigModule.forRoot(),
    DepositMoneyModule,
    PaymentModule,
    AboutModule,
    TransactionHistoryModule,
    OpenaiModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
