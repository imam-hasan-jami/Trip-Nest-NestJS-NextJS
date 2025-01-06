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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomDto = void 0;
const class_validator_1 = require("class-validator");
class CreateRoomDto {
}
exports.CreateRoomDto = CreateRoomDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Hotel Name can not be empty.' }),
    (0, class_validator_1.IsString)({ message: 'Hotel Name should be string.' }),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "hotelName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Location can not be empty.' }),
    (0, class_validator_1.IsString)({ message: 'Location should be string.' }),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Room type can not be empty.' }),
    (0, class_validator_1.IsString)({ message: 'Room type should be string.' }),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "roomType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Room Number can not be empty.' }),
    (0, class_validator_1.IsString)({ message: 'Room Number should be string.' }),
    (0, class_validator_1.MinLength)(5, { message: 'Minimum character should be 5.' }),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "roomNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Price per night can not be empty.' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Price per night should be number.' }),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "pricePerNight", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Description can not be empty.' }),
    (0, class_validator_1.IsString)({ message: 'Description should be string.' }),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "description", void 0);
//# sourceMappingURL=create-room.dto.js.map