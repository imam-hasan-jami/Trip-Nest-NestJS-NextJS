import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiTags, ApiProperty } from '@nestjs/swagger';

@ApiTags('Users')
export class UserSignInDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Email can not be empty.' })
  @IsEmail({}, { message: 'Please provide a valid email.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Password can not be empty.' })
  @MinLength(5, { message: 'Minimum character should be 5.' })
  password: string;
}
