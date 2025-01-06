import { DepositMoneyService } from 'src/deposit-money/deposit-money.service';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class DepositController {
    private readonly depositService;
    constructor(depositService: DepositMoneyService);
    deposit(body: {
        amount: number;
        method: string;
        trxId: string;
    }, currentUser: UserEntity): Promise<{
        message: string;
        deposit: import("./entities/deposit-money.entity").DepositMoney;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
        deposit?: undefined;
    }>;
}
