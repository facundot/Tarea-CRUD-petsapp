"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosteosModule = void 0;
const common_1 = require("@nestjs/common");
const posteos_controller_1 = require("./posteos.controller");
const posteos_service_1 = require("./posteos.service");
const typeorm_1 = require("@nestjs/typeorm");
const posteo_entity_1 = require("./entity/posteo.entity");
let PosteosModule = class PosteosModule {
};
PosteosModule = __decorate([
    (0, common_1.Module)({
        controllers: [posteos_controller_1.PosteosController],
        providers: [posteos_service_1.PosteosService],
        imports: [typeorm_1.TypeOrmModule.forFeature([posteo_entity_1.Posteo])]
    })
], PosteosModule);
exports.PosteosModule = PosteosModule;
//# sourceMappingURL=posteos.module.js.map