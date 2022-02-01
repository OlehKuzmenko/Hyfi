import { IsNotEmpty, IsInt, IsNumber, Equals } from 'class-validator';

export class DisclaimerModalDto {
  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @IsNumber({}, { message: 'This field must be number' })
  @IsInt({ message: 'This field must contain real number' })
  public priceValue: number | null = null;

  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @Equals(true, { message: 'Must be checked' })
  public readDisclaimer: boolean | null = null;

  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @Equals(true, { message: 'Must be checked' })
  public understandRegulations: boolean | null = null;
}
