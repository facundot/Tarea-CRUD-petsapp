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
exports.Posteo = void 0;
const typeorm_1 = require("typeorm");
let Posteo = class Posteo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Posteo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Posteo.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Posteo.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric'),
    __metadata("design:type", Array)
], Posteo.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", Array)
], Posteo.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Posteo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true, default: null }),
    __metadata("design:type", Date)
], Posteo.prototype, "edited", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true, default: null }),
    __metadata("design:type", Date)
], Posteo.prototype, "removed", void 0);
Posteo = __decorate([
    (0, typeorm_1.Entity)()
], Posteo);
exports.Posteo = Posteo;
//# sourceMappingURL=posteo.entity.js.map