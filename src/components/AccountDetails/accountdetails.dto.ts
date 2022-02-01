import { IsNotEmpty,IsEthereumAddress } from "class-validator";

export class HashValidationDto {

    @IsNotEmpty({
        message: 'This field cannot be empty'
    })
    @IsEthereumAddress({
        message:"Must be valid etherium hash"
    })
    public walletValue: string | null = null;

}