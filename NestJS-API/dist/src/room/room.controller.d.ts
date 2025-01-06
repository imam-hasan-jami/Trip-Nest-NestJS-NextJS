import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entities/room.entity';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    signup(createRoomDto: CreateRoomDto): Promise<{
        room: RoomEntity;
    }>;
    findByRoomNumber(roomNumber: string): Promise<RoomEntity>;
    findByLocation(location: string): Promise<RoomEntity>;
    updateRoom(roomNumber: string, updateRoomDto: UpdateRoomDto): Promise<RoomEntity>;
    deleteByRoomNumber(roomNumber: string): Promise<{
        message: string;
    }>;
}
