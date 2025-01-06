/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-signup.dto';
import { hash, compare } from 'bcrypt';
import { UserSignInDto } from './dto/user-signin.dto';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Roles } from 'src/utility/common/user-roles.enum';

@Injectable()
export class UsersService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signup(userSignUpDto: UserSignUpDto): Promise<UserEntity> {
    const userExists = await this.findUserByEmail(userSignUpDto.email);
    if (userExists) throw new BadRequestException('Email is not available.');
    userSignUpDto.password = await hash(userSignUpDto.password, 10);
    let user = this.usersRepository.create(userSignUpDto);
    user = await this.usersRepository.save(user);
    delete user.password;
    return user;
  }

  async addAdmin(
    userSignUpDto: UserSignUpDto,
    currentUser: UserEntity,
  ): Promise<UserEntity> {
    if (!currentUser.roles.includes(Roles.ADMIN)) {
      throw new BadRequestException('Unauthorized to add user');
    }

    let newAdmin = this.usersRepository.create(userSignUpDto);
    newAdmin.password = await hash(userSignUpDto.password, 10);
    newAdmin.roles = [Roles.ADMIN];
    newAdmin = await this.usersRepository.save(newAdmin);

    return newAdmin;
  }

  async signin(userSignInDto: UserSignInDto): Promise<UserEntity> {
    const userExists = await this.usersRepository
      .createQueryBuilder('users')
      .addSelect('users.password')
      .where('users.email=:email', { email: userSignInDto.email })
      .getOne();
    if (!userExists) throw new BadRequestException('Bad creadentials.');
    const matchPassword = await compare(
      userSignInDto.password,
      userExists.password,
    );
    if (!matchPassword) throw new BadRequestException('Bad creadentials.');
    delete userExists.password;
    return userExists;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found.');
    return user;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
  //   const user = await this.usersRepository.findOne({ id: id });
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }

  //   if (updateUserDto.name) {
  //     user.name = updateUserDto.name;
  //   }
  //   if (updateUserDto.email) {
  //     user.email = updateUserDto.email;
  //   }
  //   if (updateUserDto.password) {
  //     user.password = updateUserDto.password;
  //   }
  //   // if (updateUserDto.roles) {
  //   //   user.roles = updateUserDto.roles;
  //   // }

  //   return this.usersRepository.save(user);
  // }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (updateUserDto.name !== undefined) {
      user.name = updateUserDto.name;
    }
    // if (updateUserDto.email !== undefined) {
    //   user.email = updateUserDto.email;
    // }
    if (updateUserDto.password !== undefined) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return await this.usersRepository.save(user);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  async deleteUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.usersRepository.remove(user);
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({ email });
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async accessToken(user: UserEntity): Promise<string> {
    return sign(
      { id: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME },
    );
  }

  async deleteAccount(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }

  async updateUserAccountBalance(email: string, amount: number): Promise<void> {
    await this.usersRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({ accountBalance: () => `"accountBalance" + ${amount}` })
      .where('email = :email', { email })
      .execute();
  }

  async updateUserAccountBalancePayment(
    email: string,
    newBalance: number,
  ): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }

    user.accountBalance = newBalance;

    await this.usersRepository.save(user);
  }
}
