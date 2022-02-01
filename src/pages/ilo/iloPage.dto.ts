import { IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class IloPageDto {
  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @IsNumber({}, { message: 'This field must be number' })
  @IsInt({ message: 'This field must contain real number' })
  public priceValue: number | null = null;
}
