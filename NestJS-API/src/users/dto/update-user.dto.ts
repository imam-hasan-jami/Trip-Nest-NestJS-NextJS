import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @IsOptional()
  name: string;

  @IsOptional()
  email: string;

  @IsOptional()
  password: string;
}
