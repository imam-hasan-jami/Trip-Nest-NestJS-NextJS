import { Repository } from 'typeorm';
import { DepositMoney } from 'src/deposit-money/entities/deposit-money.entity';
import { UsersService } from '../users/users.service';
export declare class DepositMoneyService {
    private readonly depositMoneyRepository;
    private readonly usersService;
    constructor(depositMoneyRepository: Repository<DepositMoney>, usersService: UsersService);
    deposit(email: string, amount: number, method: string, trxId: string): Promise<DepositMoney>;
}
