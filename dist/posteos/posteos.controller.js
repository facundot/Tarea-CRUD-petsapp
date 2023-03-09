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
exports.PosteosController = void 0;
const common_1 = require("@nestjs/common");
const posteos_service_1 = require("./posteos.service");
const posteos_dto_1 = require("./dto/posteos.dto");
const update_posteo_dto_1 = require("./dto/update-posteo.dto");
let PosteosController = class PosteosController {
    constructor(posteosService) {
        this.posteosService = posteosService;
    }
    findAll() {
        return this.posteosService.findAll();
    }
    createPost(posteoDTO) {
        return this.posteosService.createPost(posteoDTO);
    }
    findOne(id) {
        return this.posteosService.findOneById(id);
    }
    updatePost(id, updatePosteoDTO) {
        return this.posteosService.updatePost(id, updatePosteoDTO);
    }
    deletePost(id) {
        return this.posteosService.deletePost(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PosteosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posteos_dto_1.PosteosDTO]),
    __metadata("design:returntype", void 0)
], PosteosController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PosteosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_posteo_dto_1.UpdatePosteoDTO]),
    __metadata("design:returntype", void 0)
], PosteosController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PosteosController.prototype, "deletePost", null);
PosteosController = __decorate([
    (0, common_1.Controller)('posteos'),
    __metadata("design:paramtypes", [posteos_service_1.PosteosService])
], PosteosController);
exports.PosteosController = PosteosController;
//# sourceMappingURL=posteos.controller.js.map