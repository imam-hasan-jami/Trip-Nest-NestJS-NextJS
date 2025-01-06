import { Repository } from 'typeorm';
import { TransactionHistory } from './entities/transaction-history.entity';
export declare class TransactionHistoryService {
    private readonly transactionHistoryRepository;
    constructor(transactionHistoryRepository: Repository<TransactionHistory>);
    getUserTransactionHistory(userEmail: string): Promise<TransactionHistory[]>;
    getAllTransactionHistory(): Promise<TransactionHistory[]>;
    searchTransactionHistory(email: string): Promise<TransactionHistory[]>;
}
