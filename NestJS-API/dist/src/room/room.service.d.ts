import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entities/room.entity';
import { Repository } from 'typeorm';
export declare class RoomService {
    private roomRepository;
    constructor(roomRepository: Repository<RoomEntity>);
    addRoom(createRoomDto: CreateRoomDto): Promise<RoomEntity>;
    findByRoomNumber(roomNumber: string): Promise<RoomEntity>;
    findByLocation(location: string): Promise<RoomEntity>;
    updateRoom(roomNumber: string, updateRoomDto: UpdateRoomDto): Promise<RoomEntity>;
    deleteByRoomNumber(roomNumber: string): Promise<void>;
}
