"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCatDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const cats_dto_1 = require("./cats.dto");
class UpdateCatDTO extends (0, mapped_types_1.PartialType)(cats_dto_1.CatsDTO) {
}
exports.UpdateCatDTO = UpdateCatDTO;
//# sourceMappingURL=update-cat.dto.js.map