import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateRoomDto {
  @IsOptional()
  @IsString()
  roomType?: string;

  @IsOptional()
  @IsNumber()
  pricePerNight?: number;

  @IsOptional()
  @IsString()
  description?: string;
}
