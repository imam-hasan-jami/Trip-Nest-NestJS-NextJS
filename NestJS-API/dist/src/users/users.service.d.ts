import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-signup.dto';
import { UserSignInDto } from './dto/user-signin.dto';
export declare class UsersService {
    private usersRepository;
    remove(arg0: number): void;
    constructor(usersRepository: Repository<UserEntity>);
    signup(userSignUpDto: UserSignUpDto): Promise<UserEntity>;
    addAdmin(userSignUpDto: UserSignUpDto, currentUser: UserEntity): Promise<UserEntity>;
    signin(userSignInDto: UserSignInDto): Promise<UserEntity>;
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    deleteUserByEmail(email: string): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    accessToken(user: UserEntity): Promise<string>;
    deleteAccount(userId: string): Promise<void>;
    updateUserAccountBalance(email: string, amount: number): Promise<void>;
    updateUserAccountBalancePayment(email: string, newBalance: number): Promise<void>;
}
