import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { UsersService } from '../users/users.service';
export declare class PaymentService {
    private readonly paymentRepository;
    private readonly usersService;
    constructor(paymentRepository: Repository<Payment>, usersService: UsersService);
    payment(email: string, amount: number, method: string, trxId: string): Promise<Payment>;
}
