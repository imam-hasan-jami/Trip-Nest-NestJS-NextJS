import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSignUpDto } from './dto/user-signup.dto';
import { UserEntity } from './entities/user.entity';
import { UserSignInDto } from './dto/user-signin.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(userSignUpDto: UserSignUpDto): Promise<{
        user: UserEntity;
    }>;
    addAdmin(userSignUpDto: UserSignUpDto, currentUser: UserEntity): Promise<{
        user: UserEntity;
    }>;
    signin(userSignInDto: UserSignInDto): Promise<{
        accessToken: string;
        user: UserEntity;
    }>;
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<UserEntity[]>;
    findOne(id: string): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    deleteUserByEmail(email: string): Promise<{
        message: string;
        deletedUser: UserEntity;
    }>;
    deleteAccount(currentUser: UserEntity): Promise<{
        message: string;
    }>;
    getProfile(currentUser: UserEntity): UserEntity;
}
