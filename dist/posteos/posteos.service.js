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
exports.PosteosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posteo_entity_1 = require("./entity/posteo.entity");
let PosteosService = class PosteosService {
    constructor(dogRepository) {
        this.dogRepository = dogRepository;
    }
    async findAll() {
        return `esto devuelve todos los posts`;
    }
    async createPost(postDTO) {
        return `esto crea un post`;
    }
    async findOneById(id) {
        return `esto devuelvo el post con id:${id} `;
    }
    async updatePost(id, updateDogDTO) {
        return `esto actualiza el post con id : ${id} con la info del dto`;
    }
    async deletePost(id) {
        return ` esto borra el post con id: ${id}`;
    }
};
PosteosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posteo_entity_1.Posteo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PosteosService);
exports.PosteosService = PosteosService;
//# sourceMappingURL=posteos.service.js.map