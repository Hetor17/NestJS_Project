import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";

export class CreateUserDto {
    // Verifies that the email is an email
    @IsEmail()
    // Verifies that the password is a string and not empty
    @IsString()
    @IsNotEmpty()
    email: string;

    // Verifies that the password is a string and not empty
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    // Verifies that the phone number is a number
    @IsNumber()
    // Verifies that the maximum number is 100
    @Max(100)
    age: number;
}