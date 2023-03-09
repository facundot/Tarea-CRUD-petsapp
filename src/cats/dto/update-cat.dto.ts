import { PartialType } from '@nestjs/mapped-types';
import { CatsDTO } from './cats.dto';

export class UpdateCatDTO extends  PartialType(CatsDTO) {}