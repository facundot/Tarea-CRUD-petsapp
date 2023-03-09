import { PartialType } from '@nestjs/mapped-types';
import { UsersDTO } from './users.dto';
export class UpdateUserDTO extends PartialType(UsersDTO){}