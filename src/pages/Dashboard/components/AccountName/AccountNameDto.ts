import { IsNotEmpty, IsEthereumAddress } from 'class-validator';

export class AccountNameDto {
  @IsNotEmpty({
    message: 'This field cannot be empty',
  })
  @IsEthereumAddress({
    message: 'Must be valid etherium hash',
  })
  public localAccountName: string | null = null;
}
