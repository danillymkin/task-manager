import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString({ message: 'E-Mail должен быть строкой' })
  @IsEmail({}, { message: 'Некорректный E-Mail адрес' })
  @Field({ nullable: false })
  email!: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Не менее 6 символов' })
  @MaxLength(30, { message: 'Не более 30 символов' })
  @Field({ nullable: false })
  password!: string;
}
