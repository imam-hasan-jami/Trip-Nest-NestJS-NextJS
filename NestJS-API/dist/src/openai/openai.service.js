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
exports.OpenaiService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let OpenaiService = class OpenaiService {
    constructor(openai) {
        this.openai = openai;
    }
    async createChatCompletion(messages) {
        try {
            if (!this.openai) {
                throw new Error('OpenAI instance is not properly initialized.');
            }
            return this.openai.chat.completions.create({
                messages: messages,
                model: 'gpt-3.5-turbo-16k',
            });
        }
        catch (error) {
            console.error('Error in createChatCompletion:', error);
            throw error;
        }
    }
};
exports.OpenaiService = OpenaiService;
exports.OpenaiService = OpenaiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('OpenAI')),
    __metadata("design:paramtypes", [openai_1.default])
], OpenaiService);
//# sourceMappingURL=openai.service.js.map