import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
  ) {}

  async addRoom(createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    let room = this.roomRepository.create(createRoomDto);
    room = await this.roomRepository.save(room);
    return room;
  }

  async findByRoomNumber(roomNumber: string): Promise<RoomEntity> {
    const room = await this.roomRepository.findOne({ where: { roomNumber } });
    if (!room) {
      throw new NotFoundException(`Room with number ${roomNumber} not found`);
    }
    return room;
  }

  async findByLocation(location: string): Promise<RoomEntity> {
    const room = await this.roomRepository.findOne({ where: { location } });
    if (!room) {
      throw new NotFoundException(`Room in ${location} not found`);
    }
    return room;
  }

  async updateRoom(
    roomNumber: string,
    updateRoomDto: UpdateRoomDto,
  ): Promise<RoomEntity> {
    const room = await this.findByRoomNumber(roomNumber);
    if (updateRoomDto.roomType !== undefined) {
      room.roomType = updateRoomDto.roomType;
    }
    if (updateRoomDto.pricePerNight !== undefined) {
      room.pricePerNight = updateRoomDto.pricePerNight;
    }
    if (updateRoomDto.description !== undefined) {
      room.description = updateRoomDto.description;
    }
    return this.roomRepository.save(room);
  }

  async deleteByRoomNumber(roomNumber: string): Promise<void> {
    const room = await this.findByRoomNumber(roomNumber);
    await this.roomRepository.remove(room);
  }
}
