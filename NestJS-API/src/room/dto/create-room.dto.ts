import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty({ message: 'Hotel Name can not be empty.' })
  @IsString({ message: 'Hotel Name should be string.' })
  hotelName: string;

  @IsNotEmpty({ message: 'Location can not be empty.' })
  @IsString({ message: 'Location should be string.' })
  location: string;

  @IsNotEmpty({ message: 'Room type can not be empty.' })
  @IsString({ message: 'Room type should be string.' })
  roomType: string;

  @IsNotEmpty({ message: 'Room Number can not be empty.' })
  @IsString({ message: 'Room Number should be string.' })
  @MinLength(5, { message: 'Minimum character should be 5.' })
  roomNumber: string;

  @IsNotEmpty({ message: 'Price per night can not be empty.' })
  @IsNumber({}, { message: 'Price per night should be number.' })
  pricePerNight: number;

  @IsNotEmpty({ message: 'Description can not be empty.' })
  @IsString({ message: 'Description should be string.' })
  description: string;
}
