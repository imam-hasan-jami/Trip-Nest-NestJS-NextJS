import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entities/room.entity';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('add-room')
  async signup(
    @Body() createRoomDto: CreateRoomDto,
  ): Promise<{ room: RoomEntity }> {
    return { room: await this.roomService.addRoom(createRoomDto) };
  }

  @Get('room-number/:roomNumber')
  findByRoomNumber(@Param('roomNumber') roomNumber: string) {
    return this.roomService.findByRoomNumber(roomNumber);
  }

  @Get('location/:location')
  findByLocation(@Param('location') location: string) {
    return this.roomService.findByLocation(location);
  }

  @Patch('room-number/:roomNumber')
  async updateRoom(
    @Param('roomNumber') roomNumber: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Promise<RoomEntity> {
    return this.roomService.updateRoom(roomNumber, updateRoomDto);
  }

  @Delete('room-number/:roomNumber')
  async deleteByRoomNumber(
    @Param('roomNumber') roomNumber: string,
  ): Promise<{ message: string }> {
    await this.roomService.deleteByRoomNumber(roomNumber);
    return { message: 'Room has been deleted successfully.' };
  }
}
