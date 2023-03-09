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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const cat_entity_1 = require("../cats/entities/cat.entity");
let UsersService = class UsersService {
    constructor(usersRepository, catRepository) {
        this.usersRepository = usersRepository;
        this.catRepository = catRepository;
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async createUser(userDTO) {
        const { cats } = userDTO, userdto = __rest(userDTO, ["cats"]);
        const userEnt = Object.assign(Object.assign({}, userdto), { createdAt: new Date(), edited: null, removed: null });
        if (!cats) {
            try {
                const user = this.usersRepository.create(userEnt);
                await this.usersRepository.save(user);
                return user;
            }
            catch (error) {
                throw new common_1.BadRequestException();
            }
        }
        else {
            const user = this.usersRepository.create(Object.assign(Object.assign({}, userEnt), { cats: cats.map(cat => this.catRepository.create(Object.assign(Object.assign({}, cat), { createdAt: new Date(), edited: null, removed: null }))) }));
            try {
                await this.usersRepository.save(user);
                return user;
            }
            catch (error) {
                throw new common_1.BadRequestException();
            }
        }
    }
    async findOneById(id) {
        return `esto devuelvo el usuario con id:${id} `;
    }
    async updateCat(id, updateUserDTO) {
        return `esto actualiza el usuario con id : ${id} con la info del dto`;
    }
    async deleteUser(id) {
        return ` esto borra el usuario con id: ${id}`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(cat_entity_1.Cat)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map