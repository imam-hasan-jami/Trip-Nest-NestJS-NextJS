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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_signup_dto_1 = require("./dto/user-signup.dto");
const user_entity_1 = require("./entities/user.entity");
const user_signin_dto_1 = require("./dto/user-signin.dto");
const current_user_decorator_1 = require("../utility/decorators/current-user.decorator");
const authentication_guard_1 = require("../utility/guards/authentication.guard");
const authorize_roles_decorator_1 = require("../utility/decorators/authorize-roles.decorator");
const authorization_guard_1 = require("../utility/guards/authorization.guard");
const user_roles_enum_1 = require("../utility/common/user-roles.enum");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async signup(userSignUpDto) {
        return { user: await this.usersService.signup(userSignUpDto) };
    }
    async addAdmin(userSignUpDto, currentUser) {
        return {
            user: await this.usersService.addAdmin(userSignUpDto, currentUser),
        };
    }
    async signin(userSignInDto) {
        const user = await this.usersService.signin(userSignInDto);
        const accessToken = await this.usersService.accessToken(user);
        return { accessToken, user };
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    async findAll() {
        return await this.usersService.findAll();
    }
    async findOne(id) {
        return await this.usersService.findOne(+id);
    }
    async update(id, updateUserDto) {
        const updatedUser = await this.usersService.update(id, updateUserDto);
        return updatedUser;
    }
    async deleteUserByEmail(email) {
        const deletedUser = await this.usersService.deleteUserByEmail(email);
        return { message: 'User deleted successfully', deletedUser };
    }
    async deleteAccount(currentUser) {
        await this.usersService.deleteAccount(currentUser.id.toString());
        return { message: 'Your account has been deleted successfully.' };
    }
    getProfile(currentUser) {
        return currentUser;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiOperation)({ summary: 'Sign up a new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signup_dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signup", null);
__decorate([
    (0, authorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizeGuard),
    (0, common_1.Post)('add-admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signup_dto_1.UserSignUpDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addAdmin", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signin_dto_1.UserSignInDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, authorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizeGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, authorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizeGuard),
    (0, common_1.Get)('single/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, authorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.Roles.ADMIN),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizeGuard),
    (0, common_1.Delete)('deleteuser/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserByEmail", null);
__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, common_1.Delete)('delete/me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteAccount", null);
__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map