import { PaymentService } from './payment.service';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    payment(body: {
        amount: number;
        method: string;
        trxId: string;
    }, currentUser: UserEntity): Promise<{
        message: string;
        payment: import("./entities/payment.entity").Payment;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
        payment?: undefined;
    }>;
}
