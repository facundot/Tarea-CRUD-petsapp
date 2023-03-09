"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const users_dto_1 = require("./users.dto");
class UpdateUserDTO extends (0, mapped_types_1.PartialType)(users_dto_1.UsersDTO) {
}
exports.UpdateUserDTO = UpdateUserDTO;
//# sourceMappingURL=update-user.dto.js.map