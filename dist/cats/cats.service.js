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
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cat_entity_1 = require("./entities/cat.entity");
const user_entity_1 = require("../users/entities/user.entity");
let CatsService = class CatsService {
    constructor(catsRepository, userRepository) {
        this.catsRepository = catsRepository;
        this.userRepository = userRepository;
    }
    async findAll() {
        return await this.catsRepository.find();
    }
    async createCat(catDTO) {
        const catEnt = Object.assign(Object.assign({}, catDTO), { createdAt: new Date(), edited: null, removed: null });
        const cat = this.catsRepository.create(catEnt);
        console.log(cat);
        try {
            await this.catsRepository.save(cat);
            return Object.assign({}, cat);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException();
        }
    }
    async findOneById(id) {
        const cat = await this.catsRepository.findOneBy({ id: id });
        if (!cat)
            throw new common_1.NotFoundException();
        return cat;
    }
    async deleteCat(id) {
        const cat = await this.findOneById(id);
        return await this.catsRepository.remove(cat);
    }
    async updateCat(id, updateCatDTO) {
        const cat = await this.catsRepository.preload(Object.assign(Object.assign({ id: id }, updateCatDTO), { edited: new Date() }));
        if (!cat)
            throw new common_1.BadRequestException();
        try {
            await this.catsRepository.save(cat);
            return cat;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
        return;
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cat_entity_1.Cat)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map