import { PartialType } from '@nestjs/mapped-types';
import { PosteosDTO } from './posteos.dto';
export class UpdatePosteoDTO extends PartialType(PosteosDTO){}