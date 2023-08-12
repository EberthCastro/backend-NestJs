import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";
export class CreateProjectDto {
    @IsString() 
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    image: string;

    @IsString()
    category: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}