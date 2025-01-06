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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const create_room_dto_1 = require("./dto/create-room.dto");
const update_room_dto_1 = require("./dto/update-room.dto");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    async signup(createRoomDto) {
        return { room: await this.roomService.addRoom(createRoomDto) };
    }
    findByRoomNumber(roomNumber) {
        return this.roomService.findByRoomNumber(roomNumber);
    }
    findByLocation(location) {
        return this.roomService.findByLocation(location);
    }
    async updateRoom(roomNumber, updateRoomDto) {
        return this.roomService.updateRoom(roomNumber, updateRoomDto);
    }
    async deleteByRoomNumber(roomNumber) {
        await this.roomService.deleteByRoomNumber(roomNumber);
        return { message: 'Room has been deleted successfully.' };
    }
};
exports.RoomController = RoomController;
__decorate([
    (0, common_1.Post)('add-room'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('room-number/:roomNumber'),
    __param(0, (0, common_1.Param)('roomNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "findByRoomNumber", null);
__decorate([
    (0, common_1.Get)('location/:location'),
    __param(0, (0, common_1.Param)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "findByLocation", null);
__decorate([
    (0, common_1.Patch)('room-number/:roomNumber'),
    __param(0, (0, common_1.Param)('roomNumber')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_room_dto_1.UpdateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoom", null);
__decorate([
    (0, common_1.Delete)('room-number/:roomNumber'),
    __param(0, (0, common_1.Param)('roomNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "deleteByRoomNumber", null);
exports.RoomController = RoomController = __decorate([
    (0, common_1.Controller)('room'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
//# sourceMappingURL=room.controller.js.map