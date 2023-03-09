import { PartialType } from '@nestjs/mapped-types';
import { DogsDTO } from './dogs.dto';
export class UpdateDogDTO extends PartialType(DogsDTO){}