import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  MinLength,
  MaxLength,
  IsInt,
  IsString,
  IsNotEmpty,
  IsEmail,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsInt()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Должно быть не менее 2 символов',
  })
  @MaxLength(30, {
    message: 'Должно быть не более 30 символов',
  })
  username: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  @IsString()
  @IsEmail()
  email: string;
}
