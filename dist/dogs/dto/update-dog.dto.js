"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDogDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const dogs_dto_1 = require("./dogs.dto");
class UpdateDogDTO extends (0, mapped_types_1.PartialType)(dogs_dto_1.DogsDTO) {
}
exports.UpdateDogDTO = UpdateDogDTO;
//# sourceMappingURL=update-dog.dto.js.map