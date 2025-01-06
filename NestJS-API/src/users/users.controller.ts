import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSignUpDto } from './dto/user-signup.dto';
import { UserEntity } from './entities/user.entity';
import { UserSignInDto } from './dto/user-signin.dto';
import { CurrentUser } from 'src/utility/decorators/current-user.decorator';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { AuthorizeRoles } from 'src/utility/decorators/authorize-roles.decorator';
import { AuthorizeGuard } from 'src/utility/guards/authorization.guard';
import { Roles } from 'src/utility/common/user-roles.enum';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async signup(
    @Body() userSignUpDto: UserSignUpDto,
  ): Promise<{ user: UserEntity }> {
    return { user: await this.usersService.signup(userSignUpDto) };
  }

  @AuthorizeRoles(Roles.ADMIN)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Post('add-admin')
  async addAdmin(
    @Body() userSignUpDto: UserSignUpDto,
    @CurrentUser() currentUser: UserEntity,
  ): Promise<{ user: UserEntity }> {
    return {
      user: await this.usersService.addAdmin(userSignUpDto, currentUser),
    };
  }

  @Post('signin')
  async signin(@Body() userSignInDto: UserSignInDto): Promise<{
    accessToken: string;
    user: UserEntity;
  }> {
    const user = await this.usersService.signin(userSignInDto);
    const accessToken = await this.usersService.accessToken(user);

    return { accessToken, user };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @AuthorizeRoles(Roles.ADMIN)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Get('all')
  async findAll(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  @AuthorizeRoles(Roles.ADMIN)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Get('single/:id')
  async findOne(@Param('id') id: string): Promise<UserEntity> {
    return await this.usersService.findOne(+id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    return updatedUser;
  }

  @AuthorizeRoles(Roles.ADMIN)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Delete('deleteuser/:email')
  async deleteUserByEmail(@Param('email') email: string) {
    const deletedUser = await this.usersService.deleteUserByEmail(email);
    return { message: 'User deleted successfully', deletedUser };
  }

  @UseGuards(AuthenticationGuard)
  @Delete('delete/me')
  async deleteAccount(
    @CurrentUser() currentUser: UserEntity,
  ): Promise<{ message: string }> {
    await this.usersService.deleteAccount(currentUser.id.toString());
    return { message: 'Your account has been deleted successfully.' };
  }

  @UseGuards(AuthenticationGuard)
  @Get('me')
  getProfile(@CurrentUser() currentUser: UserEntity) {
    return currentUser;
  }
}
