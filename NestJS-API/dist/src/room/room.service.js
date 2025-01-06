"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const room_entity_1 = require("./entities/room.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RoomService = class RoomService {
    constructor(roomRepository) {
        this.roomRepository = roomRepository;
    }
    async addRoom(createRoomDto) {
        let room = this.roomRepository.create(createRoomDto);
        room = await this.roomRepository.save(room);
        return room;
    }
    async findByRoomNumber(roomNumber) {
        const room = await this.roomRepository.findOne({ where: { roomNumber } });
        if (!room) {
            throw new common_1.NotFoundException(`Room with number ${roomNumber} not found`);
        }
        return room;
    }
    async findByLocation(location) {
        const room = await this.roomRepository.findOne({ where: { location } });
        if (!room) {
            throw new common_1.NotFoundException(`Room in ${location} not found`);
        }
        return room;
    }
    async updateRoom(roomNumber, updateRoomDto) {
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
    async deleteByRoomNumber(roomNumber) {
        const room = await this.findByRoomNumber(roomNumber);
        await this.roomRepository.remove(room);
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_entity_1.RoomEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoomService);
//# sourceMappingURL=room.service.js.map