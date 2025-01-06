import { TransactionHistoryService } from './transaction-history.service';
export declare class TransactionHistoryController {
    private readonly transactionHistoryService;
    constructor(transactionHistoryService: TransactionHistoryService);
    getUserTransactionHistory(currentUser: any): Promise<import("./entities/transaction-history.entity").TransactionHistory[]>;
    getAllTransactionHistory(): Promise<import("./entities/transaction-history.entity").TransactionHistory[]>;
    searchTransactionHistory({ email }: {
        email: string;
    }): Promise<import("./entities/transaction-history.entity").TransactionHistory[]>;
}
