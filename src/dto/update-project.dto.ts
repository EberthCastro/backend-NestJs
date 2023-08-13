import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";

export class UpdateProjectDto {
    @IsString()
    @IsOptional()
    title?: string;
    
    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsOptional()
    category?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}